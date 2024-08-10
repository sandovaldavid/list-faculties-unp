import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql.js";

export async function GET(request, {params}) {
  console.log(params.idFaculty);
  const result = await pool.query("SELECT * FROM faculties WHERE id = ?", [params.idFaculty]);
  return NextResponse.json(result[0])
}

export function DELETE() {
  return NextResponse.json({
    message: "This is a DELETE response from /api/faculties/[idFaculty]"
  })
}

export function PUT() {
  return NextResponse.json({
    message: "This is a PUT response from /api/faculties/[idFaculty]"
  })
}

