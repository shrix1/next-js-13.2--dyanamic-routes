"use client"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
})
import "../../node_modules/react-quill/dist/quill.snow.css"

const ReactQuillComponent = () => {
  const [quill, setQuill] = useState<any>()

  const handle = (e: any) => {
    console.log(e)
    setQuill(e)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Accessing the document object is safe only on the client-side
      console.log(document)
    }
  }, [])

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
    </div>
  )
}

export default ReactQuillComponent
