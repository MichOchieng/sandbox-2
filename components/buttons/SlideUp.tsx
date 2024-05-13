"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonData {
  text: string;
  link?: string;
}

const SlideUp = ({ text, link }: ButtonData) => {
  return (
    <button className="overflow-hidden w-fit min-w-[100px] min-h-[30px] px-6 py-2 group relative">
      <div className="w-full h-full text-center group-hover:-translate-y-1/2 group-hover:opacity-0 smoothed">
        {text}
      </div>
      <div className="absolute text-center translate-y-[100%] group-hover:-translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 smoothed bg-black text-white w-full h-full">
        text
      </div>
    </button>
  );
};

export default SlideUp;
