import dynamic from "next/dynamic"
const ReactQuillComponent = dynamic(() => import("./ReactQuillComponent"))

const page = () => {
  return <ReactQuillComponent />
}

export default page
