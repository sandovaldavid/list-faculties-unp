import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql.js";

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
    const {name, description, path_img} = await request.json();
    const response = await pool.query("UPDATE faculties SET name = ?, description = ?, path_img = ? WHERE id = ?", [name, description, path_img, params.idFaculty]);
    if (response.affectedRows === 0) {
      return NextResponse.json({message: "Faculty not found"}, {status: 404})
    }
    return new Response(null, {status: 204})
  } catch (e) {
    return NextResponse.json({error: e.message}, {status: 500})
  }
}

