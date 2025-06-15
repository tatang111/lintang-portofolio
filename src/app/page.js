"use client"

import ButtonsHome from "@/components/ButtonsHome";
import DescHome from "@/components/DescHome";
import Image from "next/image";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <main className="container mx-auto mt-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="flex-col-reverse flex md:flex-row justify-between">
          <section className="w-full mt-84 md:mt-0 md:w-1/2">
            <h5 className="text-center md:text-left">Software Developer</h5>
            <h1 className="text-5xl leading-16 text-center md:text-left -mt-1 font-semibold">Hello I'm</h1>
            <h1 className="text-5xl text-accent text-center md:text-left leading-16 font-semibold">Lintang Purnama</h1>
            <p className="font-semibold text-center md:text-left">{"I’m"} a Frontend Developer and a Bootcamp-graduated.</p>
            <p className="font-semibold mb-4 text-center md:text-left">I enjoy turning ideas into elegant, functional, and responsive digital experiences.</p>
            <ButtonsHome />
          </section>
          <section className="flex items-center justify-center w-full mb-3 md:mb-0 md:w-120 mr-10">
            <Photo />
          </section>
        </div>
        <DescHome />
      </motion.div>
    </main>
  );
}
