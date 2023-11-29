import "./App.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
import BookmarkModal from "./components/Models/BookmarkModal";
import CategoryModal from "./components/Models/CategoryModal";

function App() {
  return (
    <ChakraProvider>
      <Header />

      <Flex flexWrap={"wrap"}>
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
      </Flex>

      <BookmarkModal />
      <CategoryModal />
    </ChakraProvider>
  );
}

export default App;
