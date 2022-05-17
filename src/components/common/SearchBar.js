import React from "react";
import { Input, Text } from "@chakra-ui/react";

export default function SearchBar({ setSearchValue }) {
  const handleChange = (event) => setSearchValue(event.target.value);

  return (
    <>
      <Text
        mb="8px"
        textAlign="left"
        color="white"
        fontSize="14px"
        fontWeight="bold"
      >
        Search
      </Text>
      <Input
        onChange={handleChange}
        placeholder="Type any Keyword"
        size="sm"
        background="#003238"
        color="#989898"
        borderRadius="5px"
        h="29px"
        mb="14px"
      />
    </>
  );
}
