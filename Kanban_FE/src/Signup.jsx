import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    emp_id: "",
    emp_name: "",
    password: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const savedata = (e) => {
    e.preventDefault();

    const modaldata = {
      emp_id: data.emp_id,
      emp_name: data.emp_name,
      password: data.password,
    };

    axios
      .post(`http://127.0.0.1:8000/Kanban/postEmployee/`, modaldata)
      .then((res) => {
        console.log(res.data);
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
      })
      .catch((error) => {
        console.error(error);
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
      });
  };

  return (
    <Box p={4} maxWidth="400px" mx="auto">
      <form onSubmit={savedata}>
        <Flex
          flexDirection="column"
          backgroundColor="#def9de"
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={6}>Sign Up</Heading>
          <Input
            placeholder="Employee ID"
            type="text"
            name="emp_id"
            value={data.emp_id}
            onChange={handleInput}
            mb={4}
          />
          <Input
            placeholder="Username"
            type="text"
            name="emp_name"
            value={data.emp_name}
            onChange={handleInput}
            mb={4}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleInput}
            mb={4}
          />
          <Button colorScheme="teal" type="submit" onClick={savedata} mb={8}>
            Sign Up
          </Button>
          <Button onClick={() => (window.location.href = "/")}>
            Login
          </Button>
          {showSuccessMessage && (
            <Alert status="success">
              <AlertIcon />
              Sign up Successful!
            </Alert>
          )}
          {showErrorMessage && (
            <Alert status="error">
              <AlertIcon />
              Sign up Unsuccessful!
            </Alert>
          )}
        </Flex>
      </form>
    </Box>
  );
}

export default Signup;
