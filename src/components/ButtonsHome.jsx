import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

const ButtonsHome = () => {
  return (
    <div className="flex items-center gap-5 flex-col md:flex-row">
      <a download href="/LintangPSA-CV-WebDeveloper-2025.pdf" className="border px-7 text-[#00E187] cursor-pointer transitions duration-300 hover:bg-[#00E187] hover:text-white  border-[#00E187] md:px-5 py-1.5 rounded-full ">
        Download CV <Download className="inline" />
      </a>
      <div className="flex items-center gap-5">
        <Link href="https://github.com/tatang111" target="_blank" className="border text-[#00E187] cursor-pointer transitions duration-300 hover:bg-[#00E187] hover:text-white  border-[#00E187] px-2 py-2 rounded-full">
          <Github className="w-5 h-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/lintang-purnama-surya-aji-35b52228b/" target="_blank" className="border text-[#00E187] cursor-pointer transitions duration-300 hover:bg-[#00E187] hover:text-white  border-[#00E187] px-2 py-2 rounded-full">
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link href="https://www.instagram.com/lintangpsa/" target="_blank" className="border text-[#00E187] cursor-pointer transitions duration-300 hover:bg-[#00E187] hover:text-white  border-[#00E187] px-2 py-2 rounded-full">
          <Instagram className="w-5 h-5" />
        </Link>
        <Link href="https://wa.me/+6288230646040?text=Halo! Saya ada lowongan kerja" target="_blank" className="border text-[#00E187] cursor-pointer transitions duration-300 hover:bg-[#00E187] hover:text-white  border-[#00E187] px-2 py-2 rounded-full">
          <RiWhatsappFill className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ButtonsHome;
