"use client"
import Link from "next/link"
import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  return (
    <main>
      <h1 className="text-2xl text-sky-500 text-center">
        <Link href="/data">dynamicRout</Link>
      </h1>

      <motion.div
        // layout
        className="w-[500px] flex flex-col gap-5 h-[600px] border-2 border-sky-500 rounded-lg text-white"
      >
        <motion.section
          className="flex flex-col "
          layout="position"
          // initial={{ opacity: 0, y: -10 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ layout: { duration: 1, type: "spring" } }}
          // exit={{ opacity: 0, y: -10 }}
        >
          <div
            className="px-5 flex justify-between text-2xl"
            onClick={() => setShow(!show)}
          >
            <h1>Time</h1>
            <h1> + </h1>
          </div>
          {/* <AnimatePresence> */}
          {show && (
            <motion.div
              className="px-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              // exit={{ opacity: 0, y: -10 }}
            >
              <div>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </div>
            </motion.div>
          )}
          {/* </AnimatePresence> */}
        </motion.section>

        {/* second */}
        <motion.section
          layout="position"
          className="flex flex-col"
          // initial={{ opacity: 0, y: -10 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ layout: { duration: 1, type: "inertia" } }}
          // exit={{ opacity: 0, y: -10 }}
        >
          <div
            className="px-5 flex justify-between text-2xl"
            onClick={() => setShow1(!show1)}
          >
            <h1>Time</h1>
            <h1> + </h1>
          </div>
          {show1 && (
            <motion.div
              className="px-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </ul>
            </motion.div>
          )}
        </motion.section>
      </motion.div>
    </main>
  )
}
