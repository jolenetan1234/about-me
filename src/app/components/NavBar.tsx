"use client";

import { useState } from "react";
import { Anchor, Box, Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/NavBar.module.css";

const mainLinks = [
  { link: "#", label: "Home" },
  { link: "#", label: "About" },
  { link: "#", label: "Projects" },
  { link: "#", label: "Experience" },
];

const NavBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      //   style={{
      //     // textTransform: "uppercase",
      //     fontSize: "var(--mantine-font-size-xs)",
      //     color:
      //       "light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-1))",
      //     padding: "7px var(--mantine-spacing-sm)",
      //     fontWeight: "700",
      //     borderBottom: "2px solid transparent",
      //     transition: "border-color 100ms ease, color 100ms ease",
      //   }}
    >
      {item.label}
    </Anchor>
  ));

  //   const secondaryItems = userLinks.map((item) => (
  //     <Anchor
  //       href={item.link}
  //       key={item.label}
  //       onClick={(event) => event.preventDefault()}
  //       className={classes.secondaryLink}
  //     >
  //       {item.label}
  //     </Anchor>
  //   ));

  return (
    <header className={classes.header}>
      <Container
        // className={classes.inner}
        style={{
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <MantineLogo size={34} /> */}
        <Box
          //   className={classes.links}
          visibleFrom="sm"
          style={{
            paddingTop: "var(--mantine-spacing-lg)",
            height: "84px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* <Group justify="flex-end">{secondaryItems}</Group> */}
          <Group
            gap={0}
            justify="flex-end"
            // className={classes.mainLinks}
            style={{}}
          >
            {mainItems}
          </Group>
        </Box>
        {/* <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
          style={{
            backgroundColor: "green",
          }}
        /> */}
      </Container>
    </header>
  );
};

export default NavBar;
