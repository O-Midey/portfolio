import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export const Projects = () => {
  return (
    <div>
      <section>
        <div className="mx-auto w-full md:w-[80%]">
          <motion.h1
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="section-heading font-bold text-5xl my-[10vw] md:my-[5vw]"
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
            className="projects mx-auto w-full md:w-4/5 lg:grid grid-cols-2 gap-8"
          >
            <div className="project-tile w-full h-48 mb-12 md:max-w-[90%] mx-auto ">
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
            <div className="project-tile w-full h-48 mb-12 md:mb-0  md:max-w-[90%] mx-auto">
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
            <div className="project-tile mb-12 md:mb-0 w-full col-span-2 h-48 md:max-w-[90%] mx-auto">
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

{
  /* <section>
        <div className="mx-auto w-full md:w-[80%]">
          <motion.h1
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="section-heading font-bold text-5xl my-[10vw] md:my-[5vw]"
          >
            <span>Resumé.</span>
          </motion.h1>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
            className="projects mx-auto w-full md:w-4/5 lg:grid grid-cols-2 gap-8"
          >
            <div className="project-tile w-full h-48 mb-12 md:max-w-[90%] mx-auto ">
              <img className="project-image" src="src\assets\portfolio.png" />
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
            <div className="project-tile w-full h-48 mb-12 md:mb-0  md:max-w-[90%] mx-auto">
              <img className="project-image" src="src\assets\todo.png" />
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
            <div className="project-tile mb-12 md:mb-0 w-full col-span-2 h-48 md:max-w-[90%] mx-auto">
              <img className="project-image" src="src\assets\quotes.png" />
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
      </section> */
}
