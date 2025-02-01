"use client";

import { useState } from "react";
import { Anchor, Box, Container, Group } from "@mantine/core";
import classes from "@/styles/NavBar.module.css";

const mainLinks = [
  { link: "#", label: "Home" },
  { link: "#", label: "About" },
  { link: "#", label: "Projects" },
  { link: "#", label: "Experience" },
];

const NavBar = () => {
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => {
    // const dataActive = index === active;

    return (
      <Anchor<"a">
        href={item.link}
        key={item.label}
        className={classes.mainLink}
        data-active={index === active || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(index);
        }}
        style={
          {
            // textTransform: "uppercase",
            //   fontSize: "var(--mantine-font-size-xs)",
            //   color:
            //     "light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-1))",
            //   padding: "7px var(--mantine-spacing-sm)",
            //   fontWeight: "700",
            //   borderBottom: "2px solid transparent",
            //   transition: "border-color 100ms ease, color 100ms ease",
          }
        }
      >
        {item.label}
      </Anchor>
    );
  });

  return (
    <header className={classes.header}>
      <Container
        style={{
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          visibleFrom="sm"
          style={{
            paddingTop: "var(--mantine-spacing-lg)",
            height: "84px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Group gap={0} justify="flex-end">
            {mainItems}
          </Group>
        </Box>
      </Container>
    </header>
  );
};

export default NavBar;
