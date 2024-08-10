import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql.js";

export async function GET(request, {params}) {
  return NextResponse.json({
    message: "This is a GET response from /api/faculties/[idFaculty]"
  });
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

