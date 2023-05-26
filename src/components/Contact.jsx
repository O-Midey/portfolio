import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
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
              className="section-heading font-bold text-5xl my-[10vw] md:my-[5vw]"
            >
              <span>Contact.</span>
            </motion.h1>
            <motion.p
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
              className="about-me"
            >
              you can shoot me an email directly on{" "}
              <span className="colored-text">
                <a href="mailto:thatboymidey@gmail.com">
                  thatboymidey@gmail.com
                </a>
              </span>
            </motion.p>
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
};
