const CardAboutme = ({title, field}) => {
  return (
    <div className="flex gap-2 justify-center md:justify-start">
      <span className="text-gray-400">{title}</span>
      <span>{field}</span>
    </div>
  );
};

export default CardAboutme;
