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
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/resume">resume</Link>
        <Link to="/contact">contact</Link>
      </motion.div>
    </AnimatePresence>
  );
};
