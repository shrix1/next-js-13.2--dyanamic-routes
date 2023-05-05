"use client";
import React, { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

const ReactQuillComponent = () => {
  const [quill, setQuill] = useState<any>();

  const handle = (e: any) => {
    console.log(e);
    setQuill(e);
  };

  return (
    <div className=" rounded-lg">
      <ReactQuill
        placeholder="write here"
        value={quill}
        onChange={handle}
        className="bg-gray-300 border-2 border-red-500 rounded-md  min-h-full"
      />

      <div
        className="bg-white p-5 list-outside list-disc ml-2 marker:text-sky-400 list-item "
        dangerouslySetInnerHTML={{ __html: quill }}
      ></div>

      <ul className="bg-gray-700 p-10 rounded-md list-outside list-disc marker:text-sky-400 ">
        <li>sasasasa</li>
        <li>sasasasa</li>
        <li>sasasasa</li>
        <li>sasasasa</li>
        <li>sasasasa</li>
        <li>sasasasa</li>
        <li>sasasasa</li>
      </ul>
    </div>
  );
};

export default ReactQuillComponent;
