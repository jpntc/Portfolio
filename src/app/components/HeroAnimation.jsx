"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TechOrbs = [
  {
    path: "/images/tech-stack-images/py.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r  from-blue-200 via-sky-400 to-yellow-400 p-4",
  },
  {
    path: "/images/tech-stack-images/js.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-orange-300 to-white p-4 ",
  },
  {
    path: "/images/tech-stack-images/ts.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-blue-800 via-sky-600 to-white p-6  overflow-hidden ",
  },
  {
    path: "/images/tech-stack-images/jv.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r  from-red-500 to-blue-500 p-4 ",
  },
  {
    path: "/images/tech-stack-images/cpp.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r  from-blue-800  via-blue-500 to-white p-4 ",
  },
];




const HeroAnimation = () => {
  return (
    <>
      <div className="p-3 ">
        <ul className="flex justify-evenly">
          {TechOrbs.map((orb, index) => (
            <li>
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className= {`${orb.styles}" pointer-events-none"`}
              >
                <Image
                  src={orb.path}
                  width={orb.width}
                  height={orb.height}
                  className="pointer-events-none"
                ></Image>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeroAnimation;
