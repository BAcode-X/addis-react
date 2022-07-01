import React from "react";
import { Link, Flex, Box } from "rebass";

export default function Navbar() {
  return (
    <>
      <Flex color="white" bg="black" alignItems="center">
        <Link
          p={3}
          variant="nav"
          href="/"
          sx={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            mx: "1rem",
          }}
        >
          Logo
        </Link>
        <Box mx="auto" />
        <Link
          variant="nav"
          href="/"
          sx={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            mx: "1rem",
          }}
        >
          Home
        </Link>
        <Link
          variant="nav"
          href="/"
          sx={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            mx: "1rem",
          }}
        >
          Contact us
        </Link>
      </Flex>
    </>
  );
}
