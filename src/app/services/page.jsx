"use client";

import CardService from "@/components/CardService";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 w-full gap-10">
          <CardService number="01" text="Web Development" desc="We build fast, responsive, and reliable websites that bring your ideas to life." />
          <CardService number="02" text="Front-End Development" desc="We create beautiful, interactive, and user-friendly interfaces for your application." />
          <CardService number="03" text="Back-End Development" desc="We manage databases, server-side logic, and make sure everything runs smoothly." />
        </div>
      </motion.div>
    </main>
  );
};

export default page;
