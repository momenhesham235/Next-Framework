import React from "react";
import Logo from "./Logo";
import { navLinks } from "@/Utils/constant/navLinks";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed w-full left-0 top-0 bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex justify-between items-center transition-all">
        {/* desktop navigation */}
        <Logo />
        <nav className="hidden md:flex gap-6 capitalize">
          {navLinks.map((link) => (
            <Link
              href={`${link}`}
              className="text-slate-400 hover:text-white"
              key={link}
            >
              {link}
            </Link>
          ))}
        </nav>
          {/* mobile naigation */}
          <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
