"use client";
import ProjectCard from "./ProjectCard";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ProjectPopUp from "../components/ProjectPopUp";

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
    description:
      "An inventory system that offers CRUD operations to simulate a real-world system used by commerce businesses.",
    detailedDescription:
      "A command-line project for my software engineering class. The project was developed with Java, and uses OOP design principles. For modularity, I used an item class for the items that will be stored in the database, so a storage class that is used to load the system with a data file of items into a hashmap data structure, and abstract away the datastructure with CRUD methods. Finally there is a main program which takes in CRUD requests from the terminal, processes them, and logs all the transactions processed, as well as the time they were made.",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl:
      "https://github.com/jpntc/CSCI-370-Projects/tree/main/Inventory%20Management%20Simulation",
    tag: ["All", "CL"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 5,
    title: "URL Parser",
    description:
      "A URL parsing program that takes in URLs that point to different web pages and extracts the information they contain.",
    detailedDescription:
      "A command-line project for my software engineering class. The project was created in Java from a UML system diagram. It uses OOP principles such as modularization and abstraction, with 3 classes for handling plain html pages, image URLs, and URLs that point to pdf/docx files. It uses a WebReader class to handle branching and functionality for each type of URL. Finally it uses a WebReaderApplication class which is used to handle flags passed from the command-line. The content extracted from the URLs are stored in a separate folder. The information regarding the content such as file size and type are stored in an output file. Major packages used were Java's Abstract Window Toolkit, and .net package",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "https://github.com/jpntc/CSCI-370-Projects/tree/main/URL_Parser",
    tag: ["All", "CL"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const view = useInView(ref, { once: false });
  const [initialLoad, setInitiallyLoaded] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (animationCount === projectsData.length) {
      setInitiallyLoaded(true);
    }
  }, [animationCount]);

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
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.section
        ref={ref}
        id="projects"
        className=""
        variants={sectionVariants}
        initial="initial"
        animate={view ? (initialLoad ? "animate" : { opacity: 1 }) : "initial"}
        transition={{ duration: 1.0 }}
      >
        <h2 className="text-center text-5xl xl:text-6xl font-bold text-text-dark mt-8 mb-8">
          Projects
        </h2>
        <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 px-4">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : { opacity: 1 }}
              transition={{ duration: 1.0, delay: index * 0.5 }}
              onAnimationComplete={() =>
                setAnimationCount((count) => count + 1)
              }
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
        <ProjectPopUp
          project={projectsData[selectedProject]}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ProjectSection;