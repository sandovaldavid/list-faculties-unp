import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql";

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
    if (!data.get("facultyImage")) {
      return NextResponse.json({error: "No image provided"}, {status: 400});
    }
    const result = await pool.query("INSERT INTO faculties SET ?", {
      name: data.get("name"),
      description: data.get("description"),
      path_img: data.get("facultyImage").name
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