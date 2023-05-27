import { useState } from "react";
import Home from "./components/Home";
import { NavMenuMobile } from "./components/NavMenuMobile";
import { Projects } from "./components/Projects";
import About from "./components/About";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
export const closeNavbar = () => {
  setOpenMobileNav(false);
};

function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center ">
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

      {openMobileNav && <NavMenuMobile setOpenMobileNav={setOpenMobileNav} />}
    </div>
  );
}

export default App;
