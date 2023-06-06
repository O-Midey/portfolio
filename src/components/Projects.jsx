import { motion } from "framer-motion";
import React from "react";

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
            <div className="project-tile ">
              <img
                className="project-image"
                src="https://res.cloudinary.com/daypv7q8r/image/upload/v1685146875/portfolio_zrw2lp.png"
              />
              <div className="overlay">
                <h1>portfolio website</h1>
                <p>personal portfolio website</p>
                <div className="stacks flex gap-2">
                  <button>React</button>
                  <button>Tailwind CSS</button>
                  <button>Framer Motion</button>
                </div>
                <a href="">check it out &#8599;</a>
              </div>
            </div>
            <div className="project-tile">
              <img
                className="project-image"
                src="https://res.cloudinary.com/daypv7q8r/image/upload/v1685146874/todo_osi50o.png"
              />
              <div className="overlay">
                <h1>todo app</h1>
                <p>a todo app to keep track of your tasks and goals.</p>
                <div className="stacks flex gap-2">
                  <button>React</button>
                  <button>javascript</button>
                  <button>local storage</button>
                </div>
                <a href="">check it out &#8599;</a>
              </div>
            </div>
            <div className="project-tile  col-span-2">
              <img
                className="project-image"
                src="https://res.cloudinary.com/daypv7q8r/image/upload/v1685146874/quotes_l3uchl.png"
              />
              <div className="overlay">
                <h1>quotes generator</h1>
                <p>personal portfolio website</p>
                <div className="stacks flex gap-2">
                  <button>HTML</button>
                  <button>CSS</button>
                  <button>javascript</button>
                </div>
                <a href="">check it out &#8599;</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
