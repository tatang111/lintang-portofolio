"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({href, children, onClick}) => {
    const pathname = usePathname()

    const isActive = pathname === href

  return (
    <Link onClick={onClick} href={href} className={` ${isActive ? "active font-semibold" : ""} ${children === "Hire me" ? "bg-[#00e187] rounded-full hover:bg-[#00e191] text-center h-9 flex items-center px-3 py-4 !text-black " : "text-nav"} transitions duration-200`}>
      {children}
    </Link>
  )
}

export default Navlink
