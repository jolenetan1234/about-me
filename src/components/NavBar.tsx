"use client"

import { useState } from "react";
import { DrawOutlineButton, HamburgerButton } from "./ui/buttons";
import { Separator } from "./ui/separator";

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// // import { Icons } from "@/components/icons"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

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
    title: "Experience",
    href: "/experience",
  },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  }
  return (
    // sticky navbar
    <nav className="h-[8vh] md:h-[10vh] fixed top-0 left-0 right-0 w-full bg-[var(--navbar-bg)]"> 
      {/* <div className="h-full w-full"> */}
        {/* flexbox for md, containing navbar items */}
        <div className="h-full flex justify-between md:justify-center items-center w-[96%] m-auto">
          {/* List of navbar items. Hidden on small screens. */}
            <ul className="hidden md:flex justify-center items-center w-3/4 m-auto">
              <div className="flex-1 text-center px-[1%]">LOGO</div>
              {navbarItems.map(item => (
                <li 
                key={item.title} 
                className="flex-1 px-[1%]">
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
            {navbarItems.map(item => (
              <li 
              key={item.title} 
              className="flex justify-center items-center block hover:primary-color text-center flex-1 w-[95%] m-auto mb-3"
              >
                <button
                className="w-full h-full focus:bg-primary-color hover:bg-primary-color hover:text-black focus:text-black focus:outline-none rounded-lg"
                >{item.title}</button>
              </li>
            ))}
          </ul>
        // </div>
      )}
      {/* </div> */}
    </nav>
  )
}

export default NavBar;
// const NavBar = () => {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         {navbarItems.map(item => (
//           <NavigationMenuItem>
//             {item.title}
//           </NavigationMenuItem>
//         ))}
//         <NavigationMenuItem>
//           HI
//         </NavigationMenuItem>
//         <NavigationMenuItem>

//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

// import { useState } from "react";
// import { Anchor, Box, Container, Group } from "@mantine/core";
// import classes from "@/styles/NavBar.module.css";

// const mainLinks = [
//   { link: "#", label: "Home" },
//   { link: "#", label: "About" },
//   { link: "#", label: "Projects" },
//   { link: "#", label: "Experience" },
// ];

// const NavBar = () => {
//   const [active, setActive] = useState(0);

//   const mainItems = mainLinks.map((item, index) => {
//     // const dataActive = index === active;

//     return (
//       <Anchor<"a">
//         href={item.link}
//         key={item.label}
//         className={classes.mainLink}
//         data-active={index === active || undefined}
//         onClick={(event) => {
//           event.preventDefault();
//           setActive(index);
//         }}
//         style={
//           {
//             // textTransform: "uppercase",
//             //   fontSize: "var(--mantine-font-size-xs)",
//             //   color:
//             //     "light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-1))",
//             //   padding: "7px var(--mantine-spacing-sm)",
//             //   fontWeight: "700",
//             //   borderBottom: "2px solid transparent",
//             //   transition: "border-color 100ms ease, color 100ms ease",
//           }
//         }
//       >
//         {item.label}
//       </Anchor>
//     );
//   });

//   return (
//     <header className={classes.header}>
//       <Container
//         style={{
//           height: "84px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           //   visibleFrom="sm" // don't show on sm
//           style={{
//             paddingTop: "var(--mantine-spacing-lg)",
//             height: "84px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           <Group gap={0}>{mainItems}</Group>
//         </Box>
//       </Container>
//     </header>
//   );
// };
