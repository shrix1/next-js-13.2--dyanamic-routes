"use client";
import { FormEvent, useState } from "react";
import data from "../api/hello/data.json";
import Link from "next/link";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState<any>("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [result, setResult] = useState<any>();

  const handleSearchQuery = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchData = await fetch(`/api/hello?search=${search}`);
    const res = await fetchData.json();
    setResult(res);
  };

  return (
    <>
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
        result.map((ans: any, idx: number) => {
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

export default page;
