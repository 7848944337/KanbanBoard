import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Spacer,
  Textarea,
  Select,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

function ModelRead({ props }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const defaultValue = "";

  const [data, setData] = useState({
    descript: props.descript,
    emp: props.emp,
    end_date: props.end_date,
    mang_id: props.mang_id,
    proirity: props.proirity,
    proj_id: props.proj_id,
    proj_name: props.proj_name,
    start_date: props.start_date,
    status: props.status,
  });

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
      .put(
        `http://127.0.0.1:8000/Kanban/ProjectPut/${props.proj_id}/`,
        modaldata
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    onClose();
  };
  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize="3xl"
          name="proj_name"
          value={data.proj_name}
          onChange={handleInput}
        >
          {props.proj_name}
        </ModalHeader>
        <ModalCloseButton />

        <Box>
          <ModalBody pb={6}>
            <Flex gap={2}>
              <Box w="391px" h="249px" flexShrink>
                <Box>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      defaultValue={props.descript}
                      focusBorderColor="teal"
                      h="200px"
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
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Select
                      focusBorderColor="teal"
                      defaultValue={props.status}
                      name="status"
                      value={data.name}
                      onChange={handleInput}
                      placeholder={props.status}
                    >
                      <option value="To-Do">To-Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl pt={3}>
                    <FormLabel>Priority</FormLabel>
                    <Select
                      focusBorderColor="teal"
                      name="proirity"
                      value={data.name}
                      onChange={handleInput}
                      placeholder={props.proirity}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box pt={3}>
                  <FormControl>
                    <FormLabel>Employee ID</FormLabel>
                    <Text name="emp" value={data.name} onChange={handleInput}>
                      {props.emp}
                    </Text>
                  </FormControl>
                </Box>
                <Box pt={3}>
                  <FormControl>
                    <FormLabel>Manager ID</FormLabel>
                    <Text name="mang_id" value={data.name} onChange={handleInput}>
                      {props.mang_id}
                    </Text>
                  </FormControl>
                </Box>
                <Box pt={3}>
                  <FormControl>
                    <FormLabel>Start Date</FormLabel>
                    <Text
                      name="start_date"
                      value={data.name}
                      onChange={handleInput}
                    >
                      {props.start_date}
                    </Text>
                  </FormControl>
                </Box>
                <Box pt={3}>
                  <FormControl>
                    <FormLabel>End Date</FormLabel>
                    <Input
                      focusBorderColor="teal"
                      placeholder={props.end_date}
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
          <Button
            colorScheme="teal"
            mr={3}
            height="38px"
            width="90px"
            size="md"
            onClick={savedata}
            type="submit"
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}

export default ModelRead;
