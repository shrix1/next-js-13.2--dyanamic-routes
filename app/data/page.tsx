"use client";
import { FormEvent, Suspense, useState } from "react";
import data from "../api/hello/data.json";
import Link from "next/link";
import SearchFetch from "../SearchFetch";

interface resultType {
  name?: string;
  rating?: number;
}

const Page = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState();

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

      <form onSubmit={handleSearchQuery} className="py-5 pl-2 flex gap-3">
        <div className="relative ">
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setSearch(e.target.value)}
            className="peer bg-transparent h-10 w-72  text-gray-200 placeholder-transparent 
            ring-1 px-2 ring-sky-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder="search here.."
          />
          <label
            htmlFor="username"
            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 
            bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
             peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm 
             transition-all peer-focus:bg-black"
          >
            Name
          </label>
        </div>
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

      <SearchFetch result={result} />
    </>
  );
};

export default Page;
