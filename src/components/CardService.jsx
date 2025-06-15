import { MoveDownRight } from "lucide-react";

const CardService = ({number, text, desc}) => {
  return (
    <section className="px-5 py-2  card-service group relative cursor-default">
      <div className="flex justify-between">
        <h2 className="md:text-4xl text-6xl font-semibold text-transparent transition cursor-default duration-500 stroke-text">
          {number}
        </h2>
        <MoveDownRight className="text-4xl cursor-pointer hover:-rotate-45 bg-white rounded-full group-hover:bg-[#00e187] cursor-default transition duration-500  text-black px-3 h-17 w-17 md:w-12 md:h-12" />
      </div>
      <h1 className="md:text-3xl text-4xl leading-15 font-[600] transition duration-500 group-hover:text-[#00e187] cursor-default">
        {text}
      </h1>
      <p className="cursor-default leading-7 pr-5 md:pr-0 md:text-sm text-lg text-gray-300 mt-0.5">
        {desc}
      </p>
    </section>
  );
};

export default CardService;
