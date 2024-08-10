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
  try {
    const {name, description, path_img} = await request.json();
    const result = await pool.query("INSERT INTO faculties SET ?", {
      name,
      description,
      path_img
    });
    return NextResponse.json({
      name,
      description,
      path_img,
      id: result.insertId
    });
  } catch (error) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
}