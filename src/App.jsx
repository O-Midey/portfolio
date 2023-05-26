import { useState } from "react";
import { Nav } from "./components/Nav";
import Home from "./components/Home";
import { NavMenuMobile } from "./components/NavMenuMobile";
import { Projects } from "./components/Projects";
import About from "./components/About";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [clickedLink, setclickedLink] = useState(false);

  const checkLinkClick = (e) => {
    let link = e.target.dataset.id;
    link = link.charAt(0).toUpperCase() + link.slice(1);
    setclickedLink(link);
    console.log(link);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {openMobileNav && <NavMenuMobile />}
    </div>
  );
}

export default App;

{
  /* <Nav
  openMobileNav={openMobileNav}
  setOpenMobileNav={setOpenMobileNav}
  checkLinkClick={checkLinkClick}
/>;
{
  clickedLink === "About" ? (
    <About />
  ) : clickedLink === "Contact" ? (
    <Contact />
  ) : clickedLink === "Resume" ? (
    <Resume />
  ) : clickedLink === "Projects" ? (
    <Projects />
  ) : (
    <Home />
  );
} */
}
