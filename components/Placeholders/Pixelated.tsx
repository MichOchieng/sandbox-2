"use client";
import NextImage from "next/image";
import { useInView, inView } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

const Pixelated = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const canvas = useRef(null);

  const src = "https://images.unsplash.com/photo-1712939706943-b6b3b4549937";

  return (
    <div className="">
      <p className="">Pixelated</p>
      <div className={`imageContainer overflow-hidden`} ref={ref}>
        <NextImage
          src={src}
          width={0}
          height={0}
          onLoadingComplete={(e) => {
            setDimension({ width: e.width, height: e.height });
          }}
          priority={true}
          alt="image"
        />
        <canvas ref={canvas} className="test" width={240} height={320} />
      </div>
    </div>
  );
};

export default Pixelated;
