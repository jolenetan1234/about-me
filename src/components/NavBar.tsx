"use client";

import { useState } from "react";
import { DrawOutlineButton, HamburgerButton } from "./ui/buttons";
import {} from "./ui/separator";

const navbarItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    // sticky navbar
    <nav className="h-[8%] md:h-[10%] top-0 left-0 right-0 w-full bg-[var(--navbar-bg)] fixed">
      {/* <div className="h-full w-full"> */}
      {/* flexbox for md, containing navbar items */}
      <div className="h-full flex justify-between md:justify-center items-center w-[96%] m-auto">
        {/* List of navbar items. Hidden on small screens. */}
        <ul className="hidden md:flex justify-center items-center w-1/2 m-auto gap-1">
          <div className="flex-1 px-[1%] text-center">LOGO</div>
          {navbarItems.map((item) => (
            <li key={item.title} className="flex-1 px-[1%]">
              <DrawOutlineButton>{item.title}</DrawOutlineButton>
            </li>
          ))}
        </ul>

        {/* Logo. Hidden on screens md and above. */}
        <div className="md:hidden w-1/5 text-center">LOGO</div>
        <HamburgerButton
          onClick={toggleOpen}
          isOpen={isOpen}
          className="md:hidden w-1/5"
        />
      </div>

      {/* Navbar items for small screens. Open when `isOpen`*/}
      {isOpen && (
        // <div className="w-full">
        <ul className="md:hidden sticky top-0 left-0 w-full h-[20vh] flex flex-col mx-auto bg-[var(--navbar-bg)]">
          {navbarItems.map((item) => (
            <li
              key={item.title}
              className="flex justify-center items-center block hover:primary-color text-center flex-1 w-[95%] m-auto mb-3"
            >
              <button className="w-full h-full focus:bg-primary-color hover:bg-primary-color hover:text-black focus:text-black focus:outline-none rounded-lg">
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        // </div>
      )}
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
