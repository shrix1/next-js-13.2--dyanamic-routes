import React from "react";
import data from "../../api/hello/data.json";
import Link from "next/link";

interface paramsType {
  params: { name: string };
}

export async function generateMetadata({ params }: paramsType) {
  return {
    title: params.name,
  };
}

async function check() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return data.filter((v) => v.name === "cs");
}

const dynamicRouteName = async ({ params }: paramsType) => {
  let filterName: any = await check();

  return (
    <>
      <div className="text-white flex flex-col p-5 border border-sky-500 w-[350px]">
        {params.name}
        <h1>name of the game : {filterName[0]?.name} </h1>
        <h1> rating out of 10 : {filterName[0]?.rating}</h1>
      </div>

      <Link href="/data" className="bg-sky-500 p-2">
        <button>Back to all games</button>
      </Link>
    </>
  );
};

export default dynamicRouteName;
