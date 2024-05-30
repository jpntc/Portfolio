import { React, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const TechOrbs = [
  {
    path: "/images/tech-stack-images/py.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4",
    alt: "Python logo",
  },
  {
    path: "/images/tech-stack-images/js.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4",
    alt: "JavaScript logo",
  },
  {
    path: "/images/tech-stack-images/ts.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white  p-6  overflow-hidden ",
    alt: "TypeScript logo",
  },
  {
    path: "/images/tech-stack-images/jv.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4 ",
    alt: "Java logo",
  },
  {
    path: "/images/tech-stack-images/cpp.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4 ",
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

  {
    path: "/images/tech-stack-images/figma.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4 ",
    alt: "figma logo",
  },

  {
    path: "/images/tech-stack-images/git.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4 ",
    alt: "git logo",
  },
  {
    path: "/images/tech-stack-images/prisma.png",
    width: 100,
    height: 100,
    styles:
      "flex rounded-full  w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r  from-cyan-800 to-white p-4 ",
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
const SkillAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div ref={ref} className="">
        <ul ref={ref} className="grid grid-cols-4  gap-2">
          {isInView ? (
            TechOrbs.map((orb, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.div
                  className={`${orb.styles} `}
                  style={{ WebkitUserSelect: "none" }}
                  initial={"spring"}
                  variants={TechOrbsVariants}
                  animate={"animate"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <div className="">
                    <Image
                      src={orb.path}
                      alt={orb.alt}
                      width={orb.width}
                      height={orb.height}
                      className="pointer-events-none select-none"
                    />
                  </div>
                </motion.div>
              </motion.li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};

export default SkillAnimation;
