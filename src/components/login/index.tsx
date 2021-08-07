import { RouteComponentProps } from "@reach/router";
import {
  FormControl,
  useToast, Input, Box, Button, Text, useColorMode, Flex
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useStorage } from "../../common/storage";

const Login: RouteComponentProps & any = () => {
  const [formDetails, setFormDetails] = useState<{ username: string; password: string; }>({ username: "", password: "" })
  const { colorMode } = useColorMode();
  const toast = useToast();
  const { setAPIStore } = useStorage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formDetails.username) {
      return toast({
        title: "Please enter username",
        position: "top",
        description: "",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else if (!formDetails.password) {
      return toast({
        title: "Please enter password",
        position: "top",
        description: "",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else if (formDetails.username === "foo" && formDetails.password === "bar") {
      setAPIStore({ username: "testlogin" })
      return toast({
        title: "Logged in successfully",
        position: "top",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Incorrect username/password",
        position: "top",
        description: "",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  return <Flex h="100vh" alignItems="center" bgColor={colorMode === "light" ? "purple.800" : "purple.900"}>
    <Box w="35%" m="20px auto" p="6" borderRadius="4px" minW="300px" bgColor={colorMode === "light" ? "white" : "whiteAlpha.300"}>
      <Box textAlign="center" mb="5px">
        <Text color={`mode.${colorMode}.logintitle`} textTransform="uppercase" fontWeight="extrabold" fontSize="1.7em" fontStyle="italic" display="flex" alignItems="center" justifyContent="center">
          <span style={{
            fontSize: "1.7em", marginRight: "2px",
            marginBottom: "3px"
          }}>P</span> eople
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" isRequired mb="20px">
          <Input type="text" placeholder="Enter Username" p="20px 15px" value={formDetails.username} onChange={e => setFormDetails({ ...formDetails, username: e.target.value })} />
        </FormControl >
        <FormControl id="password" isRequired mb="10px">
          <Input type="password" placeholder="Enter Password" p="20px 15px" value={formDetails.password} onChange={e => setFormDetails({ ...formDetails, password: e.target.value })} />
        </FormControl >
        <Button
          mt={4}
          mb={2}
          colorScheme="purple"
          fontWeight="light"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box></Flex >
}

export default Login;