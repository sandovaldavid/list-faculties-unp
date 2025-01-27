import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { unlink } from "fs/promises";

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

    // Validate required fields
    if (!data.get("name")) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    let path_img = '';
    if (image) {
      const filePath = await processImage(image);
      const resImg = await cloudinary.uploader.upload(filePath);
      if (resImg) {
        await unlink(filePath);
        path_img = resImg.secure_url;
      }
    }

    const result = await pool.query("INSERT INTO faculties SET ?", {
      name: data.get("name"),
      description: data.get("description") || '',
      path_img
    });

    return NextResponse.json({
      id: result.insertId,
      name: data.get("name"),
      description: data.get("description") || '',
      path_img
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating faculty:', error);
    return NextResponse.json(
      { message: "Error creating faculty: " + error.message },
      { status: 500 }
    );
  }
}