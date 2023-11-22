import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";

const CardBox = () => {
  return (
    <Card m={"2"} rounded={4} overflow={"hidden"} minW={300} maxW={350}>
      <CardHeader
        p={1}
        display={"flex"}
        justifyContent={"space-between"}
        bgColor={"#6a5ee6"}
        color={"white"}
      >
        <Heading size={"sm"}>Google</Heading>

        <Box>
          <CiEdit fontSize={"25px"} />
        </Box>
      </CardHeader>

      <CardBody p={1}>
        <List spacing={3}>
          <ListItems />
          <ListItems />
        </List>
      </CardBody>
    </Card>
  );
};

const ListItems = () => {
  return (
    <ListItem style={{ marginTop: "0px" }}>
      <ListIcon as={CiEdit} color="green.500" />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </ListItem>
  );
};

export default CardBox;
