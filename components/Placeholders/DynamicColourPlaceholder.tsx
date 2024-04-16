import React from "react";
import Image from "next/image";

import { getPlaiceholder } from "plaiceholder";

const DynamicColourPlaceholder = async () => {
  const src = "https://images.unsplash.com/photo-1712939706943-b6b3b4549937";

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { color } = await getPlaiceholder(buffer);

  return (
    <div className="">
      <p className="">Dynamic Plaiceholder color ({color.hex})</p>
      <div style={{ backgroundColor: color.hex }} className={`imageContainer`}>
        <Image src={src} alt="Beach" fill />
      </div>
    </div>
  );
};

export default DynamicColourPlaceholder;
