"use client";
import React, { useEffect, useState } from "react";
import data from "../api/hello/data.json";

const Page = () => {
  const [blogItems, setBlogItems] = useState(data);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  console.log(blogItems);

  useEffect(() => {
    let filteredItems: any;

    switch (selectedFilter) {
      case "all":
        filteredItems = data;
        break;
      case "br":
        filteredItems = data.filter((d) => d.catorgory === "br");
        break;
      case "comp":
        filteredItems = data.filter((d) => d.catorgory === "comp");
        break;
      case "fun":
        filteredItems = data.filter((d) => d.catorgory === "fun");
        break;
      case "9":
        filteredItems = blogItems.filter((d) => d.rating === 9);
        break;
      case "8.5":
        filteredItems = blogItems.filter((d) => d.rating === 8.5);
        break;
      case "8":
        filteredItems = blogItems.filter((d) => d.rating === 8);
        break;
      default:
        filteredItems = data;
    }

    setBlogItems(filteredItems);
  }, [selectedFilter]);

  function handleFilterChange(e: any) {
    setSelectedFilter(e.target.value);
  }

  return (
    <div>
      <section className="flex justify-around items-center gap-5 flex-warp h-screen ">
        <div className="text-white text-2xl space-y-2">
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="filters"
              id="all"
              value="all"
              checked={selectedFilter === "all"}
              onChange={handleFilterChange}
            />
            <label htmlFor="all">all</label>
          </div>
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="filters"
              id="comp"
              value="comp"
              checked={selectedFilter === "comp"}
              onChange={handleFilterChange}
            />
            <label htmlFor="comp">comp</label>
          </div>
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="filters"
              id="fun"
              value="fun"
              checked={selectedFilter === "fun"}
              onChange={handleFilterChange}
            />
            <label htmlFor="fun">fun</label>
          </div>
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="filters"
              id="br"
              value="br"
              checked={selectedFilter === "br"}
              onChange={handleFilterChange}
            />
            <label htmlFor="br">br</label>
          </div>
        </div>

        <div className="text-white text-2xl space-y-2">
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="rating"
              id="9"
              value="9"
              checked={selectedFilter === "9"}
              onChange={handleFilterChange}
            />
            <label htmlFor="9">rating 9</label>
          </div>
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="rating"
              id="8.5"
              value="8.5"
              checked={selectedFilter === "8.5"}
              onChange={handleFilterChange}
            />
            <label htmlFor="8.5">rating 8.5</label>
          </div>
          <div className="space-x-5 border p-2 rounded-md">
            <input
              type="radio"
              name="rating"
              id="8"
              value="8"
              checked={selectedFilter === "8"}
              onChange={handleFilterChange}
            />
            <label htmlFor="8">rating 8</label>
          </div>
        </div>

        <div className="flex gap-5 flex-col">
          {blogItems.map((d, index) => {
            return (
              <div
                key={index}
                className="text-2xl text-white p-4 border-2 border-sky-500 flex flex-col gap-2 w-[300px] rounded-lg "
              >
                <h1>{d.name}</h1>
                <h1>{d.rating}</h1>
                <h1>{d.catorgory}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Page;
