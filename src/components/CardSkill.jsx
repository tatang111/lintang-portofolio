import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./ui/tooltip";

const CardSkill = ({ src, tooltip }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div className="bg-zinc-800 cursor-pointer transitions duration-300 hover:text-[#00E187] flex justify-center items-center rounded-lg px-5 py-7">
            {src}
          </div>
        </TooltipTrigger>
        <TooltipContent className="text-sm font-[500]">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CardSkill;
