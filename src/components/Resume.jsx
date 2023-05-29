import React from "react";
import { motion } from "framer-motion";

export const Resume = () => {
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
            <span>Resumé.</span>
          </motion.h1>
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
            className="about-me"
          >
            Click{" "}
            <span className="colored-text">
              <a
                href="https://drive.google.com/file/d/16UM2wb7r6w1kcrxZjnFFYY2pWj3hLmbp/view"
                target="_blank"
              >
                here
              </a>
            </span>{" "}
            to view my resumé.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
