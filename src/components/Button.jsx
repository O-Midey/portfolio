import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

export const Button = () => {
  return (
    <div className="hamburger lg:hidden">
      <Hamburger
        hideOutline={false}
        color="#ffffff"
        duration={0.9}
        size={32}
        toggled={isOpen}
        toggle={setOpen} // onToggle={openMenu}
      />
    </div>
  );
};
