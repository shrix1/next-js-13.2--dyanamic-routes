import React from "react"
import Link from "next/link"

interface gamesType {
  name: string
  rating: number
  catorgory: string
}

const Page = async () => {
  async function getGames() {
    const data = await fetch(
      "https://next-js-13-2-dyanamic-routes.vercel.app/api/game"
    )
    const res = await data.json()
    return res
  }

  const games: gamesType[] = await getGames()

  return (
    <>
      {games.map((info, idx: number) => {
        return (
          <Link
            href={`/fetchmethod/${info.name}`}
            key={idx}
            className="border p-2 border-white/30 mb-1 rounded-md"
          >
            {info.name} | {info.rating} | {info.catorgory}
          </Link>
        )
      })}
    </>
  )
}

export default Page
