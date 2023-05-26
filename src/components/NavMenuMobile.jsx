import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export const NavMenuMobile = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "tween" }}
        layout
        className="nav-menu--mobile flex"
        exit={{ opacity: 0 }}
      >
        {/* <Link className="nav-link-item">home</Link>
        <Link className="nav-link-item">projects</Link>
        <Link className="nav-link-item">resume</Link>
        <Link className="nav-link-item">contact</Link> */}
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul> */}
        <a href="/" className="nav-link-item">
          home
        </a>
        <a href="/Projects" className="nav-link-item">
          projects
        </a>
        <a href="/Resume" className="nav-link-item">
          resume
        </a>
        <a href="/Contact" className="nav-link-item">
          contact
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

// return (
//   <AnimatePresence>
//     <motion.div
//       initial={{ x: 1000 }}
//       animate={{ x: 0 }}
//       transition={{ type: "tween" }}
//       layout
//       className="nav-menu--mobile flex"
//     >

//       ;<a className="nav-link-item">home</a>
//       <a className="nav-link-item">projects</a>
//       <a className="nav-link-item">resume</a>
//       <a className="nav-link-item">contact</a>
//     </motion.div>
//   </AnimatePresence>
// );
