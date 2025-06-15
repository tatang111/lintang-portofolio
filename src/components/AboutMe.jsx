import CardAboutme from "./CardAboutme";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4 mb-10 md:mb-0">
      <h2 className="text-3xl font-[600] md:text-left text-center">About me</h2>
      <p className="text-gray-400 text-sm leading-7 md:text-left text-center">
        My aim is to grow, collaborate, and contribute to developing innovative solutions that make a real-world impact.Let's collaborate and bring your ideas to life!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-4 ">
        <CardAboutme title="Name" field="Lintang Purnama Surya Aji" />
        <CardAboutme title="Phone" field="(+62) 0882-3064-6040" />
        <CardAboutme title="Experiences" field="0 Years" />
        <CardAboutme title="Instagram" field="@lintangpsa" />
        <CardAboutme title="Nasionality" field="Indonesia" />
        <CardAboutme title="Email" field="lintangpsa@gmail.com" />
        <CardAboutme title="Freelance" field="Available" />
        <CardAboutme title="Language" field="Indonesia, English" />
      </div>
    </div>
  );
};

export default AboutMe;
