import React from "react";
import data from "../data.json";

const dynamicRouteName = ({ params }: any) => {
  console.log(params);
  const filterName: any = data.filter((v) => v.name === params.name);
  console.log(filterName);
  return (
    <>
      <div className="text-white">
        {params.name}
        <h1>name of the game : {filterName[0]?.name} </h1>
        <h1> rating out of 10 : {filterName[0]?.rating}</h1>
      </div>
    </>
  );
};

export default dynamicRouteName;
