import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import Model from "./Model";
import Status from "./Status";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { emp_name } = useParams();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Function to update the search query state whenever the user types in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <ChakraProvider>
      <Box maxWidth="1000px" textAlign="left" marginY={100} marginX={20}>
        <Text fontSize="4xl" fontWeight={500}>
          Kanban Board
        </Text>
        <Text fontSize="2xl" fontWeight={400} lineHeight="110%">
          {emp_name}'s Tasks
        </Text>
        <Model />
        <Button
          pos="absolute"
          right="100"
          onClick={() => (window.location.href = "/")}
        >
          Logout
        </Button>
        <Box pos="absolute" right="60">
          <Input
            type="text"
            focusBorderColor="teal"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange} // Attach the event handler for search input change
          />
        </Box>
        <Status searchQuery={searchQuery} /> {/* Pass the searchQuery to the Status component */}
      </Box>
    </ChakraProvider>
  );
}

export default Dashboard;