"use client";
import ProjectCard from "./ProjectCard";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectPopup from "./ProjectPopup";

const projectsData = [
  {
    id: 1,
    title: "Image Generator",
    description:
      "A web app that integrates the DALL-E 3 API to generate images from user input, along with interactive components to adjust the images created to match what is desired in mind. ",
    detailedDescription: "Detailed description here",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "",
    tag: ["All", "Web"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 2,
    title: "Game Hub",
    description:
      "A game browsing web app that uses RAWG's API and filters that gives power to browse hundreds of games.",
    detailedDescription: "Detailed description here",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "https://github.com/jpntc/Game-Hub",
    tag: ["All", "Web"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A portfolio to show the track record of my journey in programming and software engineering. ",
    detailedDescription:
      "A portfolio web application developed with Next.js and Tailwind CSS to share information about myself and my journey. The project leverages the component-based software engineering approach popular in today's web development industry. I Created 6 components for the 6 different page sections, from the Navbar to the Footer and other children components for important functionalities. The libraries I used are React's Framer Motion, Type-Animation, and Animated Numbers for the animations. I attempted a dynamic code approach when necessary for generating site information, to make the codebase small and readable. RESEND was used for sending emails. AWS was used for deployment. Contact me if you have any questions about the project!",
    image: "/images/projects/portfolio.png",
    gitUrl: "https://github.com/jpntc/Portfolio",
    tag: ["All", "Web"],
    demo: "",
    styles: {
      backgroundSize: "cover",
    },
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "",
    detailedDescription: "",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "",
    tag: ["All", "Console"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 5,
    title: "Web Scraper",
    description: "",
    detailedDescription: "",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "",
    tag: ["All", "Console"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 6,
    title: "Student Database Mockup",
    description: "",
    detailedDescription: "",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "",
    tag: ["All", "Console"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});

  
  const [initialLoad, setInitialLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const openPopup = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const cardVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

    const sectionVariants = {
      initial: {
        y: 50,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    };

  return (
    <>
      <motion.section ref={ref} id="projects" className=""
      variants = {sectionVariants}
      initial = {"initial"}
      animate = { initialLoad ? "animate": "initial"}
      transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-5xl font-bold text-text-dark mt-8 mb-8">
          Projects
        </h2>
        <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              onAnimationEnd={() => setRef(true)}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                onClick={() => openPopup(index)}
                gitUrl={project.gitUrl}
                className="cursor-pointer"
                styles={project.styles}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {selectedProject !== null && (
        <ProjectPopup
          project={projectsData[selectedProject]}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ProjectSection;
