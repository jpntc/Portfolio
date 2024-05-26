"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TechOrbs = [
  {
    path: "/images/tech-stack-images/py.png",
    width: 100,
    height: 100,
  },
  {
    path: "/images/tech-stack-images/js.png",
    width: 100,
    height: 100,
  },
  {
    path: "/images/tech-stack-images/ts.png",
    width: 100,
    height: 100,
  },
  {
    path: "/images/tech-stack-images/jv.png",
    width: 100,
    height: 100,
  },
  {
    path: "/images/tech-stack-images/cpp.png",
    width: 100,
    height: 100,
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
                className="flex rounded-full  w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r  from-blue-200 via-sky-400 to-yellow-400 p-4 "
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
