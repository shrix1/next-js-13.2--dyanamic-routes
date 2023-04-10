import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query: any = searchParams.get("search");

  const filterGame = data.filter((v) =>
    v.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filterGame, query);
  return NextResponse.json(filterGame);
}
