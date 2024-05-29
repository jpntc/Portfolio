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
      "flex   w-20 h-20 md:w-28 md:h-28  p-4",
    alt: "Python logo",
  },
  {
    path: "/images/tech-stack-images/js.png",
    width: 100,
    height: 100,
    styles:
      "flex  w-20 h-20 md:w-28 md:h-28  p-4",
    alt: "JavaScript logo",
  },
  {
    path: "/images/tech-stack-images/ts.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28   p-6  overflow-hidden ",
    alt: "TypeScript logo",
  },
  {
    path: "/images/tech-stack-images/jv.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28  p-4 ",
    alt: "Java logo",
  },
  {
    path: "/images/tech-stack-images/cpp.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28  p-4 ",
    alt: "C++ logo",
  },
  {
    path: "/images/tech-stack-images/psql.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28  p-4 ",
    alt: "C++ logo",
  },

  {
    path: "/images/tech-stack-images/figma.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28  p-4 ",
    alt: "figma logo",
  },

  {
    path: "/images/tech-stack-images/git.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28  p-4 ",
    alt: "git logo",
  },
  {
    path: "/images/tech-stack-images/prisma.png",
    width: 100,
    height: 100,
    styles:
      "flex   w-20 h-20 md:w-28 md:h-28  p-4 ",
    alt: "prisma logo",
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
      <div className="p-3 border-red-200">
        <ul className="  grid grid-cols-4 md:grid-cols-6  gap-4 px-32  ">
          {TechOrbs.map((orb, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className=""
            >
              <motion.div
                className={`${orb.styles}  border-red-200 flex justify-center overlay bg-text-dark bg-opacity-80 `}
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
