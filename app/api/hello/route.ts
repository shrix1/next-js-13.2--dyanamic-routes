import { NextResponse } from "next/server"
import data from "./data.json"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query: any = searchParams.get("search")

  type filterType = {
    name: string
    rating?: number
  }

  const filterGame: filterType[] = data.filter((v) =>
    v.name.toLowerCase().includes(query.toLowerCase())
  )

  return NextResponse.json(filterGame)
}
