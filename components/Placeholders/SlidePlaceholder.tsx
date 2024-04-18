"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

const SlidePlaceholder = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const src = "https://images.unsplash.com/photo-1712939706943-b6b3b4549937";

  return (
    <div className="">
      <p className="">Slide-out Placeholder</p>
      <div
        style={{ backgroundColor: "#ECF0F1" }}
        className={`imageContainer overflow-hidden`}
      >
        <Image
          ref={ref}
          src={src}
          alt="I Forget"
          fill
          sizes="300px"
          style={{
            opacity: isInView ? 1 : 0,
          }}
        />
        <div
          className={""}
          style={{
            left: isInView ? "100%" : "0%",
            top: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
            backgroundColor: "#ECF0F1",
            transition: "left 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SlidePlaceholder;
