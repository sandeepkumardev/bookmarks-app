import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { deleteBookmarkDB, deleteCategoryDB } from "../firebase/sdk";

const CardBox = ({ item }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const deleteBookmark = (id) => {
    deleteBookmarkDB({ cID: item.id, bID: id });
  };

  const deleteCategory = () => {
    if (
      window.confirm(
        `Do you want to delete ${item.name} category! All bookmarks of this category will be deleted.`
      ) !== true
    )
      return;

    deleteCategoryDB(item.id);
  };

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
        alignItems={"center"}
        bgColor={"#6a5ee6"}
        color={"white"}
      >
        <Heading size={"sm"} ml={1}>
          {item.name}
        </Heading>

        <Box display={"flex"} alignItems={"center"}>
          <CiEdit fontSize={"22px"} />
          <MdDeleteOutline
            style={{ marginLeft: "5px", color: "#f46a31" }}
            fontSize={"20px"}
            onClick={deleteCategory}
          />
        </Box>
      </CardHeader>

      <CardBody p={0}>
        <List spacing={3}>
          {bookmarks.map((bookmark, i) => (
            <SingleBookmark
              key={i}
              bookmark={bookmark}
              deleteBookmark={deleteBookmark}
            />
          ))}
        </List>
      </CardBody>
    </Card>
  );
};

const SingleBookmark = ({ bookmark, deleteBookmark }) => {
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
      <Spacer />
      <Box
        mr={2}
        ml={2}
        cursor={"pointer"}
        onClick={() => deleteBookmark(bookmark.id)}
      >
        <MdDeleteOutline color="#f46a31" />
      </Box>
    </ListItem>
  );
};

export default CardBox;
