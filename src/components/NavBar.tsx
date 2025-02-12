"use client";

import { useEffect, useState } from "react";
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
  // store previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // sets whether or not to hide/show navbar
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Handle scrolling and hide navbar accordingly
    const handleScroll = () => {
      const currScrollPos = window.scrollY;

      if (prevScrollPos > currScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setPrevScrollPos(currScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent navbar from scrolling up when `isOpen`
    // if (isOpen) {
    //   document.body.style.overflow = "hidden"; // Disable scrolling
    // } else {
    //   document.body.style.overflow = ""; // Enable scrolling
    // }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll); // Stop listening to scroll events
      // document.body.style.overflow = ""; // Enable scrolling
    };
  }, [prevScrollPos]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // sticky navbar
    <nav
      className={`h-[8%] md:h-[10%] w-full bg-[var(--navbar-bg)] transition-all duration-300 z-20
      ${showNavbar ? "top-0" : "-top-20"}
      ${isOpen ? "fixed top-0" : "absolute"}
    `}
    >
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
