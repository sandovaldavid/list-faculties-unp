import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql";

export async function GET() {
  try {
    const results = await pool.query("SELECT * FROM faculties");
    return NextResponse.json(results);
  } catch (e) {
    return NextResponse.json({error: e.message}, {status: 500});
  }
}

export async function POST(request) {
  return NextResponse.json({
    message: "This is a POST response from /api/faculties"
  })
}