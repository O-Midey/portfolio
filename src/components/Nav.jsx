import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react"; // library for the hamburger icon.
import { motion } from "framer-motion";

export const Nav = ({ openMobileNav, setOpenMobileNav, checkLinkClick }) => {
  const navLinksArray = ["home", "about", "projects", "resume", "contact"];
  const [navLinks, setNavLinks] = useState([
    "about",
    "projects",
    "resume",
    "contact",
  ]);

  // function that pops off the clicked link.
  const sortNavLinks = (id) => {
    const newLinks = navLinksArray.filter((nav) => nav != id);
    setNavLinks(newLinks);
  };

  const handleLinkClick = (e) => {
    sortNavLinks(e.target.dataset.id);
    checkLinkClick(e);
  };

  return (
    <header>
      <div className="nav flex items-center justify-between py-4 ">
        <p className="logo text-3xl vibrate-1">OA.</p>
        <div className="hamburger lg:hidden">
          <Hamburger
            hideOutline={false}
            color="#ffffff"
            duration={0.9}
            size={32}
            toggled={openMobileNav}
            toggle={setOpenMobileNav}
          />
        </div>
        <motion.ul className="nav-links sm:hidden md: hidden lg:flex ">
          {navLinks.map((nav) => {
            return (
              <motion.li
                key={nav}
                data-id={nav}
                onClick={handleLinkClick}
                whileHover={{
                  scale: 1.09,
                  transition: { duration: 0.00002 },
                }}
                whileTap={{ scale: 0.9 }}
                className="nav-link-item mx-6 "
              >
                {nav}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </header>
  );
};
