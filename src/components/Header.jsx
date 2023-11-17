import { Avatar, Box, Button, Flex, Spacer, WrapItem } from "@chakra-ui/react";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <Flex px={1} h={8} className="items-center border border-black">
      <Box>BookMarks</Box>

      <Spacer />

      <Box>
        <Button
          leftIcon={<IoMdAdd />}
          variant="outline"
          size="xs"
          className="m-1"
        >
          Add B
        </Button>

        <Button
          leftIcon={<IoMdAdd />}
          variant="outline"
          size="xs"
          className="m-1"
        >
          Add C
        </Button>
      </Box>

      <Spacer />

      <Box>
        <WrapItem>
          <Avatar
            size="xs"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>
      </Box>
    </Flex>
  );
};

export default Header;
