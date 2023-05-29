import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { closeNavbar } from "../App";

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
        <Link onClick={closeNavbar} to="/">
          home
        </Link>
        <Link onClick={closeNavbar} to="about">
          about
        </Link>
        <Link onClick={closeNavbar} to="projects">
          projects
        </Link>
        <Link onClick={closeNavbar} to="resume">
          resume
        </Link>
        <Link onClick={closeNavbar} to="contact">
          contact
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
