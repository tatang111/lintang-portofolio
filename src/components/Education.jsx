import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import CardExperience from "./CardExperience";

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-[600] md:text-left text-center">My education</h2>
      <p className="text-gray-400 text-sm leading-7 md:text-left text-center">
        {"I’m"} passionate about improving my Front-end skills through self-learning, following online courses, and extensive practice.
      </p>
      <ScrollArea className="h-[350px] w-full p-2 -mt-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full relative custom-scrollbar">
          <CardExperience
            date="2024 September - Now"
            text="Front-End (otodidak)"
            company="Youtube, W3Scholl"
          />
          <CardExperience
            date="2025 Maret - 2025 Juli"
            text="FullStack Web Developer Bootcamp"
            company="Harisenin.com"
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Education;
