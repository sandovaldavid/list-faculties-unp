/*
import {NextResponse} from "next/server";
import {pool} from "@/libs/mysql";

export async function GET() {
  const result = await pool.query("SELECT NOW() as Now");
  console.log(result[0].Now);
  return NextResponse.json({message: `Time: ${result[0].Now}`})
}*/
