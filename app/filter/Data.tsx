import Link from "next/link"
import React from "react"

interface gamesType {
  name: string
  rating: number
  catorgory: string
}
async function getGames() {
  const data = await fetch("api/game")
  return data.json()
}

const Data: any = async () => {
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

export default Data
