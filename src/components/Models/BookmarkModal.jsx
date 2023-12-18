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
import React, { useContext, useEffect, useState } from "react";
import { AppActions } from "../../context/ActionProvider";
import { AppStore } from "../../context/StoreProvider";

function BookmarkModal() {
  const { isBmOpen, bmModalHandler, ctModalHandler } = useContext(AppActions);
  const { addBookmark, items } = useContext(AppStore);
  const [icon, setIcon] = useState("");
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

    var inp = url;
    var http = url.search("https://");

    if (http == "-1") {
      inp = "https://" + url;
    }

    var regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (regexp.test(inp)) {
      var urlData = new URL(inp);
      var domain = urlData.origin;

      setUrl(urlData.href);
      let imageUrl = `${domain}/favicon.ico`;

      function imageExists(url) {
        var img = new Image();
        img.onload = function () {
          setIcon(imageUrl);
        };
        img.onerror = function () {
          setIcon(`http://www.google.com/s2/favicons?domain=${domain}`);
        };
        img.src = url;
      }
      imageExists(imageUrl);
    } else {
      console.log("Url is invalid!");
    }
  };

  useEffect(() => {
    if (!icon) return;

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
  }, [icon]);

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
