import React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";
import "./styles/Header.css";
import logo from "../logo.svg";

export default function Header() {
  return (
    <Flex
      as="nav"
      justify="space-between"
      padding="5"
      w="100%"
      align="center"
      className="sticky"
    >
      <Box h="4rem">
        <img className="logo-svg" src={logo} alt="React Logo" />
      </Box>
      <Box>
        <Button mr="3">Sign up</Button>
        <Button variantColor="green">Sign in</Button>
      </Box>
    </Flex>
  );
}
