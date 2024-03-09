import React, { useState } from "react";
import axios from "axios";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";

const Login = () => {
  const [emp_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        emp_name,
        password,
      });
      if (response.status === 200) {
        window.location.href = `/dashboard/${emp_name}`;
        
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials.")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          backgroundColor="#def9de"
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={6}>Log In</Heading>
          <Input
            placeholder="Username"
            type="text"
            variant="filled"
            mb={3}
            value={emp_name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            variant="filled"
            mb={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button colorScheme="teal" mb={8} type="submit">
            Log In
          </Button>
          <Button onClick={() => (window.location.href = "/signup")}>
            Sign up
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Login;
