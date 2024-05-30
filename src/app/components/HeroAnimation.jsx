import { React, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedNumbers= dynamic(
  () =>{
    return import ("react-animated-numbers");
  },{ssr: false}
)


const AchievementsList = [
  {
    metric: "Projects",
    value: "6"
  },{
    metric: "Certificaties",
    value: "2"
  },{
    metric: "Hackathons",
    value: "4",
    wins: ""
  },{
    metric: "LeetCode",
    value: "20"
  }
];
const Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};


const HeroAnimation = () => {

  return (
    <>
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          className="py-8 px-4 xl:gap-16 sm:py-16 flex flex-col sm:flex-row items-center justify between"
          initial={"initial"}
          variants={Variants}
          animate={"animate"}
          transition={{ duration: 0.7, delay:  0.8 }}
        >
          {AchievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <motion.h2
                  className="text-text-dark font-bold  text-4xl"
                  initial={"initial"}
                  variants={Variants}
                  animate={"animate"}
                  transition={{ duration: 0.8, delay: index * 0.8 }}
                  
                >
                  {achievement.metric}
                </motion.h2>
                <motion.p
                  initial={"initial"}
                  variants={Variants}
                  animate={"animate"}
                  transition={{ duration: 0.8, delay: index * 0.8 }}
                  className="text-text-light font-semibold text-xl xl:text-2xl"
                >
                  <AnimatedNumbers
                    includeComma
                    transitions={() => ({
                      type: "spring",
                      duration: 1.9,
                      delay: index  * 0.8,
                    })}
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className=""
                    config={(_) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tension: 100 * (index + 1),
                      };
                    }}
                  />
                </motion.p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default HeroAnimation;
