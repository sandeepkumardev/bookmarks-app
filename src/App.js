import "./App.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";

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
    </ChakraProvider>
  );
}

export default App;
