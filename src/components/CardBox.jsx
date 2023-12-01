import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

const CardBox = ({ item }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if (!item.bookmarks) return;

    const dataArr = Object.keys(item?.bookmarks).map((key) => ({
      ...item.bookmarks[key],
      id: key,
    }));

    setBookmarks(dataArr);
  }, [item]);

  if (!item.bookmarks) return;

  return (
    <Card m={"2"} rounded={4} overflow={"hidden"} minW={300} maxW={350}>
      <CardHeader
        p={1}
        display={"flex"}
        justifyContent={"space-between"}
        bgColor={"#6a5ee6"}
        color={"white"}
      >
        <Heading size={"sm"}>{item.name}</Heading>

        <Box>
          <CiEdit fontSize={"25px"} />
        </Box>
      </CardHeader>

      <CardBody p={0}>
        <List spacing={3}>
          {bookmarks.map((bookmark, i) => (
            <SingleBookmark key={i} bookmark={bookmark} />
          ))}
        </List>
      </CardBody>
    </Card>
  );
};

const SingleBookmark = ({ bookmark }) => {
  console.log(bookmark);
  return (
    <ListItem
      style={{
        marginTop: "0px",
        borderBottom: "1px solid lightgray",
        padding: 2,
      }}
      display={"flex"}
      alignItems={"center"}
    >
      <Box w={"12px"} mr={2} ml={2} mt={0.5}>
        <img src={bookmark.icon} alt="icon" height={"100%"} width={"100%"} />
      </Box>
      {bookmark.title}
    </ListItem>
  );
};

export default CardBox;
