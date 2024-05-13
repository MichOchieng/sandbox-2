"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";


const Button = ({ active, toggle }: { active: boolean; toggle: Function }) => {
  return (
    <div className="et-button">
      <motion.div
        animate={{ top: active ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        className="et-slider"
      >
        <div className="et-element" onClick={() => toggle()}>
          <ButtonText text="Menu" />
        </div>
        <div className="et-element" onClick={() => toggle()}>
          <ButtonText text="Close" />
        </div>
      </motion.div>
    </div>
  );
};

const ButtonText = ({ text }: { text: string }) => {
  return (
    <div className="et-perspectiveText">
      <p className="">{text}</p>
      <p className="">{text}</p>
    </div>
  );
};

const ExpandingToggle = () => {
  const [active, setActive] = useState(false);

  const expanded =
    "w-[100vw] md:w-[480px] h-[600px] top-[-0px] right-[-0px] top-[-25px] right-[-25px]";

  const hidden = "w-[100px] h-[40px] top-[-0px] right-[-0px] delay-150";

  return (
    <div
      className={"fixed top-[25px] right-[25px] md:top-[50px] md:right-[50px]"}
    >
      <div
        className={`relative bg-[#c9fd74] rounded-[25px] duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] p-[1rem] ${
          active ? expanded : hidden
        }`}
      >
        {/* Add links here */}
        <div className="test w-full h-full flex flex-col justify-end overflow-hidden">
          {/* Links */}
          <div className="test w-full h-full flex flex-col justify-center">
            <span className="">A</span>
            <span className="">B</span>
            <span className="">C</span>
            <span className="">D</span>
          </div>
          {/* Socials */}
          <span className="test w-full flex flex-row justify-center">
            <span className="">A</span>
            <span className="">B</span>
            <span className="">C</span>
            <span className="">D</span>
          </span>
        </div>
      </div>
      <Button
        active={active}
        toggle={() => {
          setActive(!active);
        }}
      />
    </div>
  );
};

export default ExpandingToggle;
