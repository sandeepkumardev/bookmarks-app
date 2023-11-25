import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppActions } from "../context/ActionProvider";

const Actions = () => {
  const { bmModalHandler, ctModalHandler } = useContext(AppActions);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<IoAddCircle />} onClick={bmModalHandler}>
          Add Bookmark
        </MenuItem>
        <MenuItem icon={<MdAttachFile />} onClick={ctModalHandler}>
          New Category
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Actions;
