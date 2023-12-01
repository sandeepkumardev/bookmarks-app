import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppActions } from "../../context/ActionProvider";
import { AppStore } from "../../context/StoreProvider";

function BookmarkModal() {
  const { isBmOpen, bmModalHandler, ctModalHandler } = useContext(AppActions);
  const { addBookmark, items } = useContext(AppStore);

  const [icon] = useState(
    "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
  );
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "",
  });

  const submitHandler = () => {
    if (!url || !title || !selectedCategory) {
      alert("Please provide all fields!");
      return;
    }

    const newItem = {
      title,
      url,
      icon,
      categoryId: selectedCategory.id,
    };

    addBookmark(newItem);

    setUrl("");
    setTitle("");
    setSelectedCategory("");
    bmModalHandler();
  };

  return (
    <>
      <Modal isOpen={isBmOpen} onClose={bmModalHandler}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Bookmark</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Please enter domain name"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              size="md"
            />

            <Input
              mt={4}
              placeholder="What should be the title?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="md"
            />

            <Select
              placeholder={
                items.length ? "Select option" : "Please add a category!"
              }
              mt={4}
              value={selectedCategory.name}
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                setSelectedCategory({
                  id: selectedOption.id,
                  name: selectedOption.value,
                });
              }}
            >
              {items.map((category, i) => (
                <option key={i} id={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"outline"}
              colorScheme="green"
              onClick={ctModalHandler}
            >
              + New Category
            </Button>
            <Spacer />
            <Button colorScheme="green" onClick={submitHandler}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BookmarkModal;
