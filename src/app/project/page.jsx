"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, Github, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Front-End Project",
    description: "A cinema platform where administrators can manage films, and users can search for movies, stream them online, and subscribe for premium content.",
    technologies: "REACT JS 13, TAILWINDCSS, REST API",
    githubLink: "https://github.com/tatang111/Chill-Cinema-Fe3-Showcases",
    liveLink: "https://chill-cinema-fe3-showcases.vercel.app/",
  },
  {
    id: 2,
    title: "Back-End Project",
    description: "A backend application that allows CRUD operations for movies, image upload, user registration, and login — with routes protected by JWT authentication.”",
    technologies: "Node JS, Express JS, MySql",
    githubLink: "https://github.com/tatang111/Mission3-Backend-Harisenin",
    liveLink: "https://github.com/tatang111/Mission3-Backend-Harisenin",
  },
  {
    id: 3,
    title: "Front-End Project",
    description: "An article management website where users can view, search, and sort articles, while administrators can manage articles and categories (CRUD) — all integrated with a REST API.",
    technologies: "Next.js 14, ShadCN UI, React, Tailwindcss",
    githubLink: "https://github.com/tatang111/Website-Manajemen-Artikel",
    liveLink: "https://website-manajemen-artikel-sgeu.vercel.app/register",
  },
];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState(null);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap);
    });
  }, [api]);

  return (
    <main className="container mx-auto ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col-reverse md:flex-row  relative mt-15 px-10">
          <section className="flex flex-col gap-4 md:w-1/2 w-full mt-8 md:mt-0">
            <h2 className="md:text-6xl text-7xl font-semibold text-transparent transition cursor-default duration-500 stroke-text">
              0{activeProject.id}
            </h2>
            <h1 className="md:text-3xl text-5xl font-[800] md:font-bold md:mt-0 mt-3">
              {activeProject.title}
            </h1>
            <p className="text-gray-400 md:text-base text-xl mt-4 md:mt-0 pr-4">
              {activeProject.description}
            </p>
            <p className="text-accent md:text-base text-xl my-4 md:my-0">
              {activeProject.technologies}
            </p>
            <div className="border-b border-gray-500 w-full md:w-9/10 mb-4 md:mb-0" />
            <div className="flex gap-3 md:mb-0 mb-10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={activeProject.liveLink} target="_blank">
                    <MoveUpRight className="text-4xl cursor-pointer rounded-full hover:text-[#00e187] cursor-default transition duration-500 text-white bg-zinc-800 px-3 w-12 h-12 cursor-pointer" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Project</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={activeProject.githubLink} target="_blank">
                    <Github className="text-4xl cursor-pointer rounded-full hover:text-[#00e187] cursor-default transition duration-500 text-white bg-zinc-800 px-3 w-12 h-12 cursor-pointer" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Repository</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </section>
          <section className="md:w-1/2 w-full -mt-8">
            <Carousel className="relative" setApi={setApi}>
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={project.id}>
                    <Image
                      src={`/asset/work/image${index + 1}.png`}
                      width={800}
                      height={800}
                      alt={project.title}
                      className="w-full max-h-96 md:h-auto border object-cover rounded-lg shadow-md"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex md:absolute md:right-14 md:-bottom-6">
                <CarouselPrevious className="h-10 w-10  bg-zinc-800 ml-6 md:ml-2 cursor-pointer hover:bg-emerald-300" />
                <CarouselNext className="h-10 w-10 bg-zinc-800 mr-6.5 md:mr-0 hover:bg-emerald-300 cursor-pointer" />
              </div>
            </Carousel>
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default page;
