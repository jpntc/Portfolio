"use client";
import { React, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const TechOrbs = [
  {
    path: "/images/tech-stack-images/py.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-blue-200 via-sky-400 to-yellow-400 p-4",
    alt: "Python logo",
  },
  {
    path: "/images/tech-stack-images/js.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-orange-300 to-white p-4 ",
    alt: "JavaScript logo",
  },
  {
    path: "/images/tech-stack-images/ts.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-blue-800 via-sky-600 to-white p-6  overflow-hidden ",
    alt: "TypeScript logo",
  },
  {
    path: "/images/tech-stack-images/jv.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-red-500 to-blue-500 p-4 ",
    alt: "Java logo",
  },
  {
    path: "/images/tech-stack-images/cpp.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-blue-800  via-blue-500 to-white p-4 ",
    alt: "C++ logo",
  },
  {
    path: "/images/tech-stack-images/psql.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4 ",
    alt: "C++ logo",
  },
];
const TechOrbsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
const HeroAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="p-3">
        <ul className="flex justify-evenly">
          {TechOrbs.map((orb, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.div
                className={`${orb.styles} `}
                style={{ WebkitUserSelect: "none" }}
                initial={"initial"}
                variants={TechOrbsVariants}
                animate={"animate"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <Image
                  src={orb.path}
                  alt={orb.alt}
                  width={orb.width}
                  height={orb.height}
                  className="pointer-events-none select-none"
                />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeroAnimation;
