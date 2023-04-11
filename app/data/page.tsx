"use client";
import { FormEvent, useState } from "react";
import data from "../api/hello/data.json";
import Link from "next/link";

interface resultType {
  name?: string;
  rating?: number;
}

const Page = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<resultType[]>();

  const handleSearchQuery = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchData = await fetch(`/api/hello?search=${search}`);
    const res = await fetchData.json();
    setResult(res);
  };

  return (
    <>
      <h1 className="text-white">{"checking code here"}</h1>

      <h1 className="text-white">games with rating </h1>

      <form onSubmit={handleSearchQuery}>
        <input
          type="search"
          placeholder="search her..."
          className="border border-sky-500 p-3"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border border-sky-500 p-2 text-white">submit</button>
      </form>

      <ul className="border border-sky-600 text-white p-5 w-52">
        {data.map((value, idx) => {
          return (
            <li key={idx}>
              <Link href={`/data/${value.name}`}>
                {value.name} | {value.rating}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link href="/" className="bg-sky-500 p-2 rounded-sm">
        Home
      </Link>

      {result ? (
        result.map((ans, idx) => {
          return (
            <div key={idx} className="text-white pt-10">
              {ans.name} {ans.rating}
            </div>
          );
        })
      ) : (
        <h1 className="text-sky-400 pt-10">nothing</h1>
      )}
    </>
  );
};

export default Page;
