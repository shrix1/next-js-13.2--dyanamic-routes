import React from "react"
import Link from "next/link"

interface gamesType {
  name: string
  rating: number
  catorgory: string
}

const Page = async () => {
  // async function getGames() {
  //   const data = await fetch("http://localhost:3000/api/game")
  //   const res = await data.json()
  //   return res
  // }

  // const games: gamesType[] = await getGames()

  return (
    <>
      {/* {games.map((info, idx: number) => {
        return (
          <Link
            href={`/fetchmethod/${info.name}`}
            key={idx}
            className="border p-2 border-white/30 mb-1 rounded-md"
          >
            {info.name} | {info.rating} | {info.catorgory}
          </Link>
        )
      })} */}
      Check
    </>
  )
}

export default Page
