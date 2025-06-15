"use client";

import Navlink from "./Navlink";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { SheetContent, SheetTrigger, Sheet, SheetTitle } from "./ui/sheet";

const Header = () => {
  return (
    <header className="py-8 md:py-8 ">
      <div className="container flex justify-between mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold ml-4 md:ml-0">
            Lintang <span className="text-accent -ml-5">.</span>
          </h1>
        </Link>
        <nav className="flex gap-6 hidden md:flex">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/services">Services</Navlink>
          <Navlink href="/resume">Resume</Navlink>
          <Navlink href="/project">Project</Navlink>
          <Navlink href="/contact">Contact</Navlink>
          <Navlink href="/contact">Hire me</Navlink>
        </nav>
        <nav className="block mr-4 md:hidden">
          <Sheet>
            <SheetTrigger>
              <CiMenuFries size={30} />
            </SheetTrigger>
            <SheetContent className=" flex flex-col justify-center items-center">
              <Link href="/">
                <SheetTitle className="text-4xl -mt-40 font-semibold">
                  Lintang <span className="text-accent -ml-5">.</span>
                </SheetTitle>
              </Link>
              <Navlink href="/">Home</Navlink>
              <Navlink href="/services">Services</Navlink>
              <Navlink href="/resume">Resume</Navlink>
              <Navlink href="/project">Project</Navlink>
              <Navlink href="/contact">Contact</Navlink>
              <Navlink href="/contact">Hire me</Navlink>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
