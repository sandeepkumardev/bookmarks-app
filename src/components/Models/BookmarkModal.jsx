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
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppActions } from "../../context/ActionProvider";
import { AppStore } from "../../context/StoreProvider";

function BookmarkModal() {
  const { isBmOpen, bmModalHandler } = useContext(AppActions);
  const { addItems, categories } = useContext(AppStore);

  const [icon] = useState(
    "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
  );
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const submitHandler = () => {
    if (!url || !title || !selectedCategory) {
      alert("Please provide all fields!");
      return;
    }

    const newItem = {
      title,
      url,
      icon,
      category: selectedCategory,
    };

    addItems(newItem);

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
          <ModalHeader>Modal Title</ModalHeader>
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
                categories.length ? "Select option" : "Please add a category!"
              }
              mt={4}
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
            >
              {categories.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={bmModalHandler}>
              Close
            </Button>
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
