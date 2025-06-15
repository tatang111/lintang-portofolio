const DescHome = () => {
  return (
    <div className="flex md:px-10 md:flex-row flex-col items-center w-full mt-4 md:mt-14 md:ml-8 gap-7 mb-8 -ml-2 md:gap-15 text-white">
      <div className="flex items-center w-1/4 gap-2 cursor-default">
        <h3 className="text-4xl font-[800]">0</h3>
        <p className="w-20 leading-5 ">Years of experience</p>
      </div>
      <div className="flex items-center w-1/4 gap-2 cursor-default">
        <h3 className="text-4xl font-[800]">5</h3>
        <p className="w-20 leading-5 ">Projects completed</p>
      </div>
      <div className="flex items-center w-1/4 gap-2 cursor-default">
        <h3 className="text-4xl font-[800]">8</h3>
        <p className="w-20 leading-5 ">Technologies mastered</p>
      </div>
      <div className="flex items-center w-1/4 gap-2 cursor-default">
        <h3 className="text-4xl font-[800]">150</h3>
        <p className="w-20 leading-5 ">Code commits</p>
      </div>
    </div>
  );
};

export default DescHome;
