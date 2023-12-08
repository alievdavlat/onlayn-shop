import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import React from "react";

type Props = {
  title:string;
  textStyles?:string
}

export const TypingText:React.FC<Props> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={` text-secondary-white ${textStyles}`}>
    {Array.from(title).map((letter, idx) => (
      <motion.span variants={textVariant2} key={idx}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText:React.FC<Props> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView={"show"}
    className={`mt-[8px]  ${textStyles}`}
    
    >
      {title}
  </motion.h2>
);