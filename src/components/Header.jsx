import { Avatar, Box, Button, Flex, Heading, WrapItem } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppActions } from "../context/ActionProvider";

const Header = () => {
  const { bmModalHandler } = useContext(AppActions);

  return (
    <Flex
      justifyContent="space-between"
      p={2}
      boxShadow="base"
      alignItems="center"
      bgColor="#6a5ee6"
      userSelect="none"
    >
      <Heading as="h3" size="md" color="white" cursor={"pointer"}>
        Bookmarks
      </Heading>

      <Box display="flex" alignItems={"center"} gap="10px">
        <Button
          variant={"outline"}
          color={"black"}
          bg={"white"}
          onClick={bmModalHandler}
        >
          + Add
        </Button>

        <WrapItem cursor={"pointer"}>
          <Avatar name="Sandeep kumar" bg="white" />
        </WrapItem>
      </Box>
    </Flex>
  );
};

export default Header;
