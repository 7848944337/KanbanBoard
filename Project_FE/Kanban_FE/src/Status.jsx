import React from "react";
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import CardsFetch from "./CardsFetch";

function Status({ searchQuery }) {
  return (
    <Box marginTop={5}>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem w="65%" h="auto" bg="#def9de" p={11}>
       
          <SimpleGrid columns={1} spacingY="11px">
         
            <CardsFetch statusName={"To-Do"} searchQuery={searchQuery} />
          </SimpleGrid>
        </GridItem>

        <GridItem ml="-70" w="65%" h="auto" bg="#def9de" p={11}>
          <SimpleGrid columns={1} spacingY="11px">
            <CardsFetch statusName={"In Progress"} searchQuery={searchQuery} />
          </SimpleGrid>
        </GridItem>

        <GridItem ml="-140" w="65%" h="auto" bg="#def9de" p={11}>
          <SimpleGrid columns={1} spacingY="11px">
            <CardsFetch statusName={"Done"} searchQuery={searchQuery} />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Status;
