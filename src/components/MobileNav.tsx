"use client";
import { navLinks } from "@/Utils/constant/navLinks";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="md:hidden cursor-pointer" onClick={handleMobileNav}>
        {isOpen ? <CgClose /> : <RxHamburgerMenu />}
      </div>
      <figure className={`${isOpen ? "block" : "hidden"} absolute rounded-md right-2 origin-top top-20 w-auto bg-slate-800 p-2 transition-all z-50`}>
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
          {navLinks.map((link) => (
            <Link
              href={`${link}`}
              className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
              key={link}
              onClick={handleMobileNav}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
};

export default MobileNav;
