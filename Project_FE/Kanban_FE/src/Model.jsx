
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Spacer,
  Textarea,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

function Model() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const rand = Math.floor(Math.random() * 10000);
  const [data, setData] = useState({
    descript: "",
    emp: "",
    end_date: "",
    mang_id: "",
    proirity: "",
    proj_id: `p${rand}`,
    proj_name: "",
    start_date: "",
    status: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const savedata = (e) => {
    e.preventDefault();

    const modaldata = {
      descript: data.descript,
      emp: data.emp,
      end_date: data.end_date,
      mang_id: data.mang_id,
      proirity: data.proirity,
      proj_id: data.proj_id,
      proj_name: data.proj_name,
      start_date: data.start_date,
      status: data.status,
    };

    axios
      .post(`http://127.0.0.1:8000/Kanban/ProjectPost/`, modaldata)
      .then((res) => {
        console.log(res.data);
    
      })
      .catch((error) => {
        console.error(error);
      
      });
    onClose();
    window.location.reload();
  };
  const refresh = (e) => {
    window.location.reload();
  };

  return (
    <>
      <Button
        colorScheme="teal"
        size="md"
        height="35px"
        width="90px"
        marginTop={5}
        onClick={onOpen}
      >
        Create
      </Button>

      <Modal
        closeOnOverlayClick={true}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        size={"2xl"}
        scrollBehavior={scrollBehavior}
        onClose={refresh}
        onSubmit={savedata}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Issue</ModalHeader>
          <ModalCloseButton />

          <Box>
            <ModalBody pb={6}>
              <Flex gap={2}>
                <Box w="391px" h="249px" flexShrink>
                  <Box w="243px">
                    <FormControl isRequired>
                      <FormLabel>Project Titile</FormLabel>
                      <Input
                        focusBorderColor="teal"
                        ref={initialRef}
                        placeholder="Titile"
                        name="proj_name"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl pt={3}>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        focusBorderColor="teal"
                        h="200px"
                        placeholder="Write here"
                        name="descript"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Spacer />

                <Box w="185px" h="32" flexShrink>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Status</FormLabel>
                      <Select
                        focusBorderColor="teal"
                        placeholder="set"
                        name="status"
                        value={data.name}
                        onChange={handleInput}
                      >
                        <option value="To-Do">To-Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired pt={3}>
                      <FormLabel>Priority</FormLabel>
                      <Select
                        focusBorderColor="teal"
                        placeholder="set"
                        name="proirity"
                        value={data.name}
                        onChange={handleInput}
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box pt={3}>
                    <FormControl isRequired>
                      <FormLabel>Employee ID</FormLabel>
                      <Input
                        focusBorderColor="teal"
                        ref={initialRef}
                        placeholder="emp id"
                        name="emp"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Box>
                  <Box pt={3}>
                    <FormControl isRequired>
                      <FormLabel>Manager ID</FormLabel>
                      <Input
                        focusBorderColor="teal"
                        ref={initialRef}
                        placeholder="mang id"
                        name="mang_id"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Box>
                  <Box pt={3}>
                    <FormControl isRequired>
                      <FormLabel>Start Date</FormLabel>
                      <Input
                        focusBorderColor="teal"
                        placeholder="YYYY-MM-DD"
                        name="start_date"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Box>
                  <Box pt={3}>
                    <FormControl isRequired>
                      <FormLabel>End Date</FormLabel>
                      <Input
                        focusBorderColor="teal"
                        placeholder="YYYY-MM-DD"
                        name="end_date"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Flex>
            </ModalBody>
          </Box>

          <ModalFooter>
            <Button onClick={savedata} colorScheme="teal" mr={3} type="submit">
              Save
            </Button>
           
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
         
        </ModalContent>
      </Modal>
     
    </>
  );
}

export default Model;
