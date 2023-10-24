import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  background,
} from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        height={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        borderRadius={"2rem"}
        margin={"auto"}
        backgroundColor={"white"}
        boxShadow={"1rem 1rem 1rem 0rem"}
      >
        <h1 id="title-h1">Programa Mensagem telegram</h1>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Token Bot:</label>
          <Input
            id="token-bot"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
          />
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Chat Id:</label>
          <Input
            id="chat-id"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
          />
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Mensagem;</label>
          <Textarea
            id="Mensagem"
            width={"48rem"}
            height={"3rem"}
            padding={"0.5rem"}
          ></Textarea>
        </FormControl>

        <Box
          borderStyle={"dotted"}
          width={"80%"}
          height={"6rem"}
          padding={"0.5rem"}
          borderRadius={"1.5rem"}
          fontSize={"1.7rem"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          clique ou arraste para adicionar arquivo.
        </Box>

        <Box display={"flex"} justifyContent={"flex-start"} width={"80%"}>
          <span>imagem selecionadas:</span>
        </Box>

        <Button
          padding={"1.5rem 2.5rem"}
          borderRadius={"1.3rem"}
          fontSize={"1.3rem"}
          backgroundColor={" rgb(100, 153, 240)"}
          color={"white"}
          border={"none"}
          cursor={"pointer"}
          _hover={{color: "blue", border: "1px solid", background: "white"}}
          >
          programar Mensagem
        </Button>
      </Flex>
    </>
  );
};

export default Home;
