import React from "react";
import Image from "next/image";
import src from "@/public/beach.jpg"

const DefaultBlur = () => {
  return (
    <div className="">
      <p className="">Placeholder Blur</p>
      <div className="imageContainer">
        <Image src={src} alt="Beach" placeholder="blur" fill />
      </div>
    </div>
  );
};

export default DefaultBlur;
