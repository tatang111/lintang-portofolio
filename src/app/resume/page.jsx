"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const ResumeContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(tabParam ?? "experience");

  useEffect(() => {
    router.push(`?tab=${activeTab}`);
  }, [activeTab]);

  return (
    <main className="container mt-3 px-5 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <Tabs
          value={activeTab}
          onValueChange={(val) => setActiveTab(val)}
          defaultValue={activeTab}
          className="w-full"
        >
          <div className="flex gap-7 w-full md:mt-0 mt-3 flex-col md:flex-row">
            <section className="md:w-4/11 w-full text-center md:text-left flex flex-col gap-7">
              <h1 className="text-4xl font-[500]">Why hire me?</h1>
              <p className="text-gray-400 md:w-full w-80 md:leading-7 md:text-start text-center md:ml-0 ml-10">
                My expertise helps bring your project to life with creativity
                and a strong technical foundation.
              </p>
              <div>
                <TabsList className="flex flex-col -mt-1 w-full gap-7 md:gap-4 h-full bg-transparent">
                  <TabsTrigger
                    className="w-full bg-zinc-800 text-white data-[state=active]:text-black py-2.5 text-base data-[state=active]:bg-emerald-300 cursor-pointer transitions duration-100"
                    value="experience"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full bg-zinc-800 text-white data-[state=active]:text-black py-2.5 text-base data-[state=active]:bg-emerald-300 cursor-pointer transitions duration-100"
                    value="education"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full bg-zinc-800 text-white data-[state=active]:text-black py-2.5 text-base data-[state=active]:bg-emerald-300 cursor-pointer transitions duration-100"
                    value="skills"
                  >
                    Skills
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full bg-zinc-800 text-white data-[state=active]:text-black py-2.5 text-base data-[state=active]:bg-emerald-300 cursor-pointer transitions duration-100"
                    value="aboutme"
                  >
                    About Me
                  </TabsTrigger>
                </TabsList>
              </div>
            </section>
            <section className="flex w-full md:w-7/11">
              <TabsContent value="experience">
                <Experience />
              </TabsContent>
              <TabsContent value="education">
                <Education />
              </TabsContent>
              <TabsContent value="skills">
                <Skills />
              </TabsContent>
              <TabsContent value="aboutme">
                <AboutMe />
              </TabsContent>
            </section>
          </div>
        </Tabs>
      </motion.div>
    </main>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResumeContent />
    </Suspense>
  )
}
