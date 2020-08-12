import React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";
import "./styles/Header.css";

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
      <p className="logo">EMS</p>
      <Box>
        <Button mr="3">Sign up</Button>
        <Button variantColor="green">Sign in</Button>
      </Box>
    </Flex>
  );
}
