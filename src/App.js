import "./App.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
import BookmarkModal from "./components/Models/BookmarkModal";
import CategoryModal from "./components/Models/CategoryModal";
import { useContext } from "react";
import { AppStore } from "./context/StoreProvider";

function App() {
  const { items } = useContext(AppStore);

  return (
    <ChakraProvider>
      <Header />

      <Flex flexWrap={"wrap"}>
        {items.map((item, i) => (
          <CardBox key={i} item={item} />
        ))}
      </Flex>

      <BookmarkModal />
      <CategoryModal />
    </ChakraProvider>
  );
}

export default App;
