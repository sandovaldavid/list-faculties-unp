import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql";

export async function GET() {
  return NextResponse.json({
    message: "This is a GET response from /api/faculties"
  });
}

export async function POST(request) {
  return NextResponse.json({
    message: "This is a POST response from /api/faculties"
  })
}