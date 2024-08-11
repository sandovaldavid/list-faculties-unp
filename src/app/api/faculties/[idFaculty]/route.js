import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql.js";
import cloudinary from "@/libs/cloudinary";
import {processImage} from "@/libs/processImage";
import {unlink} from "fs/promises";

export async function GET(request, {params}) {
  try {
    const result = await pool.query("SELECT * FROM faculties WHERE id = ?", [params.idFaculty]);
    if (result.length === 0) {
      return NextResponse.json({message: "Faculty not found"}, {status: 404})
    }
    return NextResponse.json(result[0])
  } catch (e) {
    return NextResponse.json({error: e.message}, {status: 500})
  }
}

export async function DELETE(request, {params}) {
  try {
    const response = await pool.query("DELETE FROM faculties WHERE id = ?", [params.idFaculty]);
    if (response.affectedRows === 0) {
      return NextResponse.json({message: " Faculty not found"}, {status: 404})
    }
    return new Response(null, {status: 204})
  } catch (e) {
    return NextResponse.json({error: e.message}, {status: 500})
  }
}

export async function PUT(request, {params}) {
  try {
    const data = await request.formData();
    
    const image = data.get("facultyImage");
    const updateFaculty = {
      name: data.get('name'),
      description: data.get('description'),
    }
    if (!data.get("name")) {
      return NextResponse.json({message: "name is required"}, {status: 400})
    }
    if (image) {
      const filePath = await processImage(image);
      const result = await cloudinary.uploader.upload(filePath);
      updateFaculty.path_img = result.secure_url;
      if (result) {
        await unlink(filePath);
      }
    }
    const response = await pool.query("UPDATE faculties SET ? WHERE id = ?", [updateFaculty, params.idFaculty]);
    if (response.affectedRows === 0) {
      return NextResponse.json({message: "Faculty not found"}, {status: 404})
    }
    return new Response(null, {status: 204})
  } catch (e) {
    return NextResponse.json({error: e.message}, {status: 500})
  }
}

