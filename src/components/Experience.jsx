import CardExperience from "./CardExperience";
import { ScrollArea } from "./ui/scroll-area";

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-[600] md:text-left text-center">My expericence</h2>
      <p className="text-gray-400 text-sm leading-7 md:text-left text-center">
        With a track record of delivering high-impact solutions,{" I’m"} a reliable and adaptable developer who strives for excellence in everything I do
      </p>
      <ScrollArea className="h-[350px] w-full p-2 -mt-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full relative custom-scrollbar">
          <CardExperience
            date="2025 Maret - 2025 Juli"
            text="Full Stack Developer Bootcamp"
            company="Harisenin.com"
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Experience;
