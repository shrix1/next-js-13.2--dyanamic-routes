import data from "../api/hello/data.json";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>games with rating</h1>

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
    </>
  );
};

export default page;
