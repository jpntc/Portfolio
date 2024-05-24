"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { motion } from "framer-motion";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>C++</li>
        <li>React.js & Next.js</li>
        <li>PostgreSql</li>
        <li>Django</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>GOOGLE Computer Science Summer Institute 2021</li>
        <li>Python for Data Science, AI & Development</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-primary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 md:px-10 md:mt-20 mb-2"
      >
        <Image
          src="/images/about_2.avif"
          alt="software engineering image"
          width={600}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-secondary-200 mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg ">
            I am a student who is passionate about software engineering because
            of the projects that I can build with programming languages. I like
            problem solving because I feel a sense of accomplishment when I get
            the desired solution. I love learning new technologies and am open
            to working on new projects outside my expertise because of learning
            opportunities.
          </p>
          <div className="flex flex-row mt-8 justify-start text-primary">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((t) => t.id == tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
