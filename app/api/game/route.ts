import { NextResponse } from "next/server"
import data from "./data.json"

export async function GET(request: Request) {
  return new Response(JSON.stringify(data))
}
