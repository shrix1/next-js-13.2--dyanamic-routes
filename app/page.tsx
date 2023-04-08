import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-sky-500 text-center">
        <Link href="/data">dynamicRout</Link>
      </h1>
    </main>
  );
}
