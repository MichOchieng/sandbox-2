import React from "react";
import Image from "next/image";
import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";

const CustomBlur = async () => {
  const src = "/beach.jpg";
  const buffer = await fs.readFile(`./public${src}`);

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="">
      <p className="">Custom Blur</p>
      <div className="imageContainer">
        <Image
          src={src}
          alt="Beach"
          placeholder="blur"
          fill
          blurDataURL={base64}
        />
      </div>
    </div>
  );
};

export default CustomBlur;
