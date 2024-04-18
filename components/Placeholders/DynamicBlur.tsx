import React from "react";
import Image from "next/image";

import { getPlaiceholder } from "plaiceholder";

const DynamicBlur = async () => {

  const src = "https://images.unsplash.com/photo-1712939706943-b6b3b4549937";

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="">
      <p className="">Dynamic Image Blur</p>
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

export default DynamicBlur;
