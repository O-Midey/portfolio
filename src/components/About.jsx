import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { closeNavbar } from "../App";

const About = () => {
  return (
    <AnimatePresence>
      <div>
        <section>
          <div className="mx-auto w-full md:w-[80%]">
            <motion.h1
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              className="section-heading"
            >
              <span>About me.</span>
            </motion.h1>
            <div>
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1.5 }}
                className="about-me"
              >
                I am a software engineer with a passion for creating visually
                appealing and engaging web experiences. I'm constantly on the
                lookout for ways to become more proficient and push the envelope
                of what's possible. <br />
                <br />
                As a developer, I derive a lot of satisfaction from streamlining
                and improving difficult code, and I'm always looking for fresh
                approaches to challenges. <br /> My skillset includes
                proficiency in HTML, CSS, JavaScript, Tailwind CSS, React JS,
                Framer Motion and version control (Git). <br /> <br />
                In addition to my technical skills, I am a dedicated team player
                who values collaboration and open communication. I enjoy working
                closely with clients and colleagues to ensure that every project
                is completed on time and to the highest standard. Thank you for
                taking the time to learn a bit about me. <br />
                If you're interested in working together or have any questions,
                please feel free to{" "}
                <span className="colored-text">
                  <Link onClick={closeNavbar} to="../contact">
                    get in touch!
                  </Link>
                </span>
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
};

export default About;
