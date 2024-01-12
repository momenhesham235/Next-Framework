import { IFooterColumn } from "@/Utils/types/interface";
import { ReactNode } from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { GiThunderBlade } from "react-icons/gi";

export const footerColumns: IFooterColumn[] = [
  {
    title: "solutions",
    links: ["pricing", "documentaion", "guides", "API status"],
  },
  {
    title: "support",
    links: ["pricing", "documentation", "guides", "API status"],
  },
  {
    title: "company",
    links: ["about", "blog", "jobs", "press", "partners"],
  },
  {
    title: "legal",
    links: ["claim", "privacy", "terms"],
  },
];

export const socialLinks: ReactNode[] = [
  <FaFacebook key="f" className="social-link" />,
  <BsInstagram key="i" className="social-link" />,
  <BsTwitter key="t" className="social-link" />,
  <GiThunderBlade key="g" className="social-link" />,
  <BsYoutube key="y" className="social-link" />,
];
