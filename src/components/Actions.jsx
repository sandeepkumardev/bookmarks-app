import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Actions = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<IoAddCircle />}>Add Bookmark</MenuItem>
        <MenuItem icon={<MdAttachFile />}>New Category</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Actions;
