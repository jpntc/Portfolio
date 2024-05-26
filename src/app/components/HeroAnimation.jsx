"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const TechOrbs = [
    {
        path : "/images/tech-stack-images/py.png",
    },
    {
        path: "/images/tech-stack-images/js.png",
    },
    {
        path: "/images/tech-stack-images/ts.png",
    },
    {
        path: "/images/tech-stack-images/jv.png",
    },
    {
        path: "/images/tech-stack-images/cpp.png",
    }
]


const HeroAnimation = () => {
  return (
    <>
      <div className="flex justify-evenly p-5 border border-red-800">
        <motion.div
          whileHover = {{ scale: 1.1 }}
          whileTap = {{ scale: 0.8 }}
          className="flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r  from-blue-200 via-sky-400 to-yellow-400 p-4 "
        >
          <Image
            src="/images/tech-stack-images/py.png"
            width={100}
            height={100}
            className="pointer-events-none"
          ></Image>
        </motion.div>
        <motion.div
          whileHover = {{ scale: 1.1 }}
          whileTap = {{ scale: 0.8 }}
          className= "flex rounded-full w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-orange-300 to-white p-4 "
        >
          <Image
            src="/images/tech-stack-images/js.png"
            width={100}
            height={90}
          ></Image>
        </motion.div>

        <motion.div 
        whileHover = {{ scale: 1.1 }}
        whileTap = {{ scale: 0.8 }}
        className="flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-blue-800 via-sky-600 to-white p-6  overflow-hidden ">
          <Image
            src="/images/tech-stack-images/ts.png"
            width={100}
            height={100}
          ></Image>
        </motion.div>
        <motion.div 
        whileHover ={{ scale: 1.1 }}
        whileTap = {{ scale: 0.8 }}
        className="flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r  from-red-500 to-blue-500 p-4 ">
          <Image
            src="/images/tech-stack-images/jv.png"
            width={100}
            height={100}
          ></Image>
        </motion.div>
        <motion.div 
        whileHover = {{ scale: 1.1 }}
        whileTap = {{ scale: 0.8 }}
        className="flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r  from-blue-800  via-blue-500 to-white p-4 ">
          <Image
            src="/images/tech-stack-images/cpp.png"
            width={100}
            height={100}
          ></Image>
        </motion.div>
      </div>
    </>
  );
};

export default HeroAnimation;
