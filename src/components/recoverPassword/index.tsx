import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Link,
    Text,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import Api from "../../Api";
  import { useNavigate } from "react-router-dom";
  
 
  
  const RecoverPassword = ():JSX.Element => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPasswoard, setConfirmPassword] = useState<string>("");
    const navigate = useNavigate();
  
    
  
    return (
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundImage={
          "data:image/png;base64,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"
        }
        backgroundRepeat={"repeat"}
      >
        <Box
          width={"100vw"}
          height={"100vh"}
          position={"absolute"}
          backgroundColor={"#80808080"}
        ></Box>
        <Flex
          margin={"auto"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
          borderRadius={"1rem"}
          width={"20%"}
          justifyContent={"center"}
          height={"35%"}
          padding={"2rem"}
          boxShadow={"1rem 1rem 2.5rem 0"}
          backgroundColor={"white"}
          zIndex={"2"}
        >
          <Text fontSize="2rem" fontWeight="bold" mb={4}>
            Login
          </Text>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              placeholder="Seu email"
              padding={"0.6rem"}
              width={"20rem"}
              borderRadius={"0.5rem"}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </FormControl>
  
          <FormControl mt={4}>
            <FormLabel>Senha:</FormLabel>
            <Input
              type="password"
              placeholder="Sua senha"
              padding={"0.6rem"}
              width={"20rem"}
              borderRadius={"0.5rem"}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </FormControl>
  
          <Button
            mt={4}
            colorScheme="teal"
            width="full"
            padding={"0.6rem 2rem"}
            borderRadius={"0.5rem"}
          >
            Entrar
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default RecoverPassword;