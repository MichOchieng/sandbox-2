import React from 'react'
import Image from "next/image";
import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";

const ColourPlaceholder = async () => {
    const src = "/house.jpg";
    const buffer = await fs.readFile(`./public${src}`);
    const { color } = await getPlaiceholder(buffer);
  
    return (
      <div className="">
        <p className="">Static Plaiceholder color ({color.hex})</p>
        <div style={{backgroundColor: color.hex}} className={`imageContainer`}>
          <Image
            src={src}
            alt="Beach"
            fill
          />
        </div>
      </div>
    );
}

export default ColourPlaceholder  