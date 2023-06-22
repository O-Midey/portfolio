import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <section className="lg:flex items-center">
        <div className="container w-full md:w-4/5 lg:w-2/4 m-auto">
          <motion.h1
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="flicker-2 font-bold hero-name text-5xl"
          >
            I'm Omotosho Ayomide.
          </motion.h1>
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="about-me my-6"
          >
            A front-end web developer and a music enthusiast. I am passionate
            about developing web applications with beautiful and intuitive user
            interfaces.<br></br> I use tools like
            <span className="special-text"> NextJS</span> ,
            <span className="special-text">ReactJS</span> ,
            <span className="special-text">Typescript</span> ,{" "}
            <span className="special-text">Tailwind CSS</span> ,
            <span className="special-text">Framer Motion</span> etc to make
            magic happen on the internet.
          </motion.p>
        </div>
        <div layout className="hidden lg:block">
          <img
            src="https://res.cloudinary.com/daypv7q8r/image/upload/v1685146885/coder_rcdakb.gif"
            layout
            style={{ width: 500 }}
          />
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Home;
