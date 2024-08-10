import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql.js";

export async function GET(request, {params}) {
  console.log(params.idFaculty);
  const result = await pool.query("SELECT * FROM faculties WHERE id = ?", [params.idFaculty]);
  return NextResponse.json(result[0])
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

export function PUT() {
  return NextResponse.json({
    message: "This is a PUT response from /api/faculties/[idFaculty]"
  })
}

