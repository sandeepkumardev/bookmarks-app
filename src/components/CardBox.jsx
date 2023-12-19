import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Link,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import {
  deleteBookmarkDB,
  deleteCategoryDB,
  renameCategoryDB,
} from "../firebase/sdk";
import { IoMdDoneAll } from "react-icons/io";

const CardBox = ({ item }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [ctName, setCtName] = useState(item.name);
  const [isEdit, setIsEdit] = useState(false);

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

  const renameCategory = () => {
    renameCategoryDB(item.id, ctName);

    setIsEdit(false);
  };

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
        {isEdit ? (
          <Input
            variant="flushed"
            value={ctName}
            onChange={(e) => setCtName(e.target.value)}
            placeholder="Please enter new name!"
          />
        ) : (
          <Heading size={"sm"} ml={1}>
            {item.name}
          </Heading>
        )}

        <Box display={"flex"} alignItems={"center"}>
          {isEdit ? (
            <IoMdDoneAll
              style={{
                marginLeft: "10px",
                marginRight: "8px",
                color: "#f46a31",
              }}
              fontSize={"20px"}
              onClick={renameCategory}
            />
          ) : (
            <>
              <CiEdit fontSize={"22px"} onClick={() => setIsEdit(true)} />
              <MdDeleteOutline
                style={{ marginLeft: "5px", color: "#f46a31" }}
                fontSize={"20px"}
                onClick={deleteCategory}
              />
            </>
          )}
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
      <Link
        href={bookmark.url}
        isExternal
        display={"flex"}
        alignItems={"center"}
        style={{ textDecoration: "none" }}
      >
        <Box w={"12px"} mr={2} ml={2} mt={0.5}>
          <img src={bookmark.icon} alt="icon" height={"100%"} width={"100%"} />
        </Box>
        {bookmark.title}
        <Spacer />
      </Link>
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
