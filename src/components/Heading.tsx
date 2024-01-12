import { IHeadingProps } from "@/Utils/types/interface";
import React, { FC } from "react";



const Heading: FC<IHeadingProps> = ({ title, isCentered }) => {
  return (
    <h1
      className={`bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-sky-500  to-sky-200
      font-extrabold text-2xl sm:text-3xl lg:text-4xl ${isCentered ? "text-center" : ""}`}
    >
      {title}
    </h1>
  );
};

export default Heading;
