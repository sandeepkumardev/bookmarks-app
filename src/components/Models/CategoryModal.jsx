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

function CategoryModal() {
  const { isCtOpen, ctModalHandler } = useContext(AppActions);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    if (!input) {
      alert("Please provide some input!");
      return;
    }

    console.log(input);

    setInput("");
    ctModalHandler();
  };

  return (
    <Modal isOpen={isCtOpen} onClose={ctModalHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Please enter new Category"
            value={input}
            // onChange={(e) => setInput(e.target.value)}
            onChange={inputHandler}
            size="md"
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={ctModalHandler}>
            Close
          </Button>
          <Button colorScheme="green" onClick={submitHandler}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CategoryModal;
