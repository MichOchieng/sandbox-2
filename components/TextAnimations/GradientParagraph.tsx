"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const GradientParagraph = ({ paragraph }: { paragraph: string }) => {
  const container = useRef(null);

  /*
  Offset
    Specifies two intersections where target & container meet
      Target = Paragraph      Container = Window (Default)
    
    start 0.9: 
    start of the target meets the 90% point of the container
    
    scrollYProgress will be 0 

    start 0.25: 
    start of the target meets the 25% point of the container

    scrollYProgress will be 1

  */
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  const Char = ({
    children,
    progress,
    range,
  }: {
    children: string;
    progress: MotionValue<number>;
    range: number[];
  }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
      <span>
        <span className={"shadow"}>{children}</span>
        <motion.span style={{ opacity: opacity}} >{children}</motion.span>
      </span>
    );
  };

  const Word = ({
    children,
    progress,
    range,
  }: {
    children: string;
    progress: MotionValue<number>;
    range: number[];
  }) => {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className={"word"}>
        {children.split("").map((char, i) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  };

  return (
    <p ref={container} className={"gradientParagraph"}>
      {words.map((word: string, i: number) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default GradientParagraph;
