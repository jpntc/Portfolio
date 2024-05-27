"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <section className="py-8 md:py-14 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-12 "
        >
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start mt-3 mb-3">
            <h1 className=" mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold md:text-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  to-emerald-500">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500  "
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
                speed={80}
                repeat={Infinity}
              />
            </h1>
            <p className="text-primary text-base sm:text-lg lg:text-xl mb-6">
              {/* I am someone who loves programming. I want to learn as much as I can about computers, software,
                    and all the things related to my field. This is because I see software in everything I interract with.*/}
            </p>
            <div>
              {/* <button className="text-slate-600 bg-gradient px-6 py-3 hover:bg-slate-600 rounded-full mt-3 w-full sm:w-fit  bg-gradient-to-br  from-primary-100 via-secondary-300 to-primary-100 ">
              Download My Resume
            </button> */}
            </div>
          </div>

          <div className="col-span-4 place-self-center mt-4 lg:mt-0 ">
            <div className="rounded-full bg-[#181818] h-[190px] w-[200px] lg:h-[290px] lg:w-[300px] flex justify-center overflow-hidden align-center">
              <Image
                src="/images/myAvatar1.png"
                alt="hero image ab"
                width={300}
                height={300}
                className="overflow-hidden"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
