import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql";
import {unlink} from "fs/promises"
import {processImage} from "@/libs/processImage";
import cloudinary from "@/libs/cloudinary";

export async function GET() {
  try {
    const results = await pool.query("SELECT * FROM faculties");
    if (results.length === 0) {
      return NextResponse.json({message: "No faculties found"}, {status: 404});
    }
    return NextResponse.json(results);
  } catch (e) {
    return NextResponse.json({error: e.message}, {status: 500});
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get("facultyImage");
    if (!image) {
      return NextResponse.json({error: "No image provided"}, {status: 400});
    }
    
    const filePath = await processImage(image);
    const resImg = await cloudinary.uploader.upload(filePath);
    if (resImg) {
      await unlink(filePath);
    }
    
    const result = await pool.query("INSERT INTO faculties SET ?", {
      name: data.get("name"),
      description: data.get("description"),
      path_img: resImg.secure_url
    });
    return NextResponse.json({
      name: data.get("name"),
      description: data.get("description"),
      id: result.insertId
    });
  } catch (error) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
}