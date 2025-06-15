const CardExperience = ({date, text, company}) => {
  return (
    <div className="bg-zinc-800 w-full h-[160px] rounded-md px-5 py-4 relative">
      <p className="text-accent">{date}</p>
      <h3 className="text-xl">{text}</h3>
      <p className="bottom-5 absolute">
        <span className="text-accent">•</span> {company}
      </p>
    </div>
  );
};

export default CardExperience;
