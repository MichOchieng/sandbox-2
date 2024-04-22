"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const menuStyles = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px"
  },

  closed: {

  }
}

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

  const expanded = "w-[480px] h-[600px] top-[-25px] right-[-25px]"

  const hidden = "w-[100px] h-[40px] top-[-0px] right-[-0px] delay-150"

  return (
    <div className={"fixed top-[50px] right-[50px]"}>
      <div className={`relative bg-[#c9fd74] rounded-[25px] duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] ${active ? expanded : hidden}`}>
       {/* Add links here */}
      </div>
      <Button
        active={active}
        toggle={() => {
          setActive(!active);
          console.log("echo")
        }}
      />
    </div>
  );
};

export default ExpandingToggle;
