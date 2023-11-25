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
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppActions } from "../../context/ActionProvider";
import { AppStore } from "../../context/StoreProvider";

function BookmarkModal() {
  const { isBmOpen, bmModalHandler } = useContext(AppActions);
  const { addBookmark } = useContext(AppStore);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    if (!input) {
      alert("Please provide some input!");
      return;
    }

    addBookmark(input);

    setInput("");
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
              value={input}
              // onChange={(e) => setInput(e.target.value)}
              onChange={inputHandler}
              size="md"
            />
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
