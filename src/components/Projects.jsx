import { motion } from "framer-motion";
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div>
      <section>
        <div className="section-container ">
          <motion.h1
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="section-heading "
          >
            <span>Projects.</span>
          </motion.h1>
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
            className="about-me"
          ></motion.p>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
            className="projects "
          >
            <ProjectCard />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
