import { Box, Text, useDisclosure, Modal } from "@chakra-ui/react";
import IconSelector from "./CardsProirity";
import React from "react";
import ModelRead from "./ModelRead";

function Cards(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const refresh = (e) => {
    window.location.reload();
  };

  return (
    
    <>
   
      <Box
        onClick={onOpen}
        bg="#ffffff"
        w="100%"
        h="auto"
        color="white"
        p={2}
        mb={5}
        boxShadow="md"
        rounded="md"
      >
        <Text color="#434242" size="xs" fontSize="15px" fontWeight={620}>
          {props.proj_name}
        </Text>
        <Text color="#434242" size="xs" fontSize="13px">
          {props.descript}
        </Text>
        <Box>
          <IconSelector value={props.proirity} />
        </Box>

        <Modal
          size={"2xl"}
          scrollBehavior={scrollBehavior}
          closeOnOverlayClick={true}
          isOpen={isOpen}
          onClose={refresh}
        >
          <ModelRead props={props} />
        </Modal>
      </Box>
    </>
  );
}

export default Cards;
