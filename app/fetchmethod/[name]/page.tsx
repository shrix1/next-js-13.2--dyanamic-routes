import React from "react"

interface gamesType {
  name: string
  rating: number
  catorgory: string
}

const Page = async ({ params }: any) => {
  // async function getGames() {
  //   const data = await fetch("http://localhost:3000/api/game")
  //   const res = await data.json()
  //   return res.filter((v: gamesType) => v.name === params.name)
  // }

  // const games = await getGames()

  return (
    <div className="flex text-xl gap-10">
      {/* <span> {games[0].name} </span>
      <span>|</span>
      <span> {games[0].rating}</span>
      <span>|</span>
      <span> {games[0].catorgory}</span> */}
      Checking
    </div>
  )
}

export default Page
