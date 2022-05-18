import React from "react";
import "./App.css";
import SearchBar from "../src/components/common/SearchBar";
import Card from "./components/content/Card";
import { Box } from "@chakra-ui/react";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Box width="100%" backgroundColor="#001315">
        <Box w="276px" minH="100vh" className="App" mb="30px">
          <Box>
            <SearchBar setSearchValue={setSearchValue} />
          </Box>
          <Box mb="30px">
            <Card searchValue={searchValue} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
