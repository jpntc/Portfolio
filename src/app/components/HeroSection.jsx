"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
  return (
    <>
      <section className="py-8 md:py-14 xl:mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-12"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start mt-3 mb-3"
          >
            <h1 className="mb-4 text-5xl xl:text-7xl lg:leading-normal font-extrabold md:text-nowrap">
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-secondary-dark"
              >
                Hello, I&apos;m{" "}
              </motion.span>
              <br />
              <TypeAnimation
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-secondary-dark"
                sequence={[
                  "Jude Pierre",
                  1500,
                  "a Student",
                  1500,
                  "a Builder",
                  1500,
                  "a Software Engineer",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0 "
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="rounded-full bg-[#181818] h-[190px] w-[200px] lg:h-[290px] lg:w-[300px] flex justify-center overflow-hidden align-center"
            >
              <Image
                src="/images/myAvatar1.png"
                alt="hero image"
                width={300}
                height={300}
                className="overflow-hidden"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <HeroAnimation />
      </section>
    </>
  );
};

export default HeroSection;
