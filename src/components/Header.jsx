import { Avatar, Box, Flex, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";
import Actions from "./Actions";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      p={2}
      boxShadow="base"
      // alignItems="center"
      bgColor="#6a5ee6"
      userSelect="none"
    >
      <Heading as="h3" size="md" color="white" cursor={"pointer"}>
        Bookmarks
      </Heading>

      <Box display="flex" alignItems={"center"} gap="10px">
        <Actions />

        <WrapItem cursor={"pointer"}>
          <Avatar name="Sandeep kumar" bg="LightGray" />
        </WrapItem>
      </Box>
    </Flex>
  );
};

export default Header;
