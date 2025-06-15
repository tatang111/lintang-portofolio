import CardSkill from "./CardSkill";
import {
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiNextjsLine, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-[600] md:text-left text-center">My skills</h2>
      <p className="text-gray-400 text-sm leading-7 md:text-left text-center">
        {"I’m"} constantly developing my coding skills and staying up to date with industry trends.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 py-3">
        <CardSkill
          tooltip="HTML 5"
          src={<FontAwesomeIcon size="3x" icon={faHtml5} />}
        />
        <CardSkill
          tooltip="CSS 3"
          src={<FontAwesomeIcon size="3x" icon={faCss3} />}
        />
        <CardSkill
          tooltip="JAVASCRIPT ES6"
          src={<FontAwesomeIcon size="3x" icon={faJs} />}
        />
        <CardSkill
          tooltip="REACT JS 18"
          src={<FontAwesomeIcon size="3x" icon={faReact} />}
        />
        <CardSkill tooltip="NEXT JS 13" src={<RiNextjsLine size={60} />} />
        <CardSkill
          tooltip="TAILWINDCSS"
          src={<RiTailwindCssFill size={60} />}
        />
        <CardSkill tooltip="NODEJS" src={<RiNodejsFill size={60} />} />
        <CardSkill
          tooltip="EXPRESS JS"
          src={<SiExpress size={60} />}
        />
      </div>
    </div>
  );
};

export default Skills;
