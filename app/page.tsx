import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<h1 className="text-sky-500">loading</h1>}>
      <main>
        <h1 className="text-2xl text-sky-500 text-center">
          <Link href="/data">dynamicRout</Link>
        </h1>
      </main>
    </Suspense>
  );
}
