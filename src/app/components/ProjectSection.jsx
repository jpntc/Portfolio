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
    detailedDescription:
      "Detailed description here",
    image: "/images/projects/demo_coming_soon.avif",
    gitUrl: "",
    tag: ["All", "Web"],
    demo: "",
  },
  {
    id: 2,
    title: "Game Hub",
    description:
      "A game browsing web app that uses RAWG's API and filters that gives power to browse hundreds of games.",
    detailedDescription: "Detailed description here",
    image: "/images/projects/demo_coming_soon.avif",
    gitUrl: "https://github.com/jpntc/Game-Hub",
    tag: ["All", "Web"],
    demo: "",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "A task-manager web app that offers the ability to create, cross-off, and delete tasks, it also saves them to the user's pc local storage with prisma db.",
    detailedDescription: "Detailed description here",
    image: "/images/projects/demo_coming_soon.avif",
    gitUrl: "https://github.com/jpntc/Task-Manager",
    tag: ["All", "Web"],
    demo: "",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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

  return (
    <>
      <section ref={ref} id="projects" className="">
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
              />
            </motion.li>
          ))}
        </motion.ul>
      </section>

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
