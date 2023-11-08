import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  background,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import ImageUpload from "../ImageUpload";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const [tokenbot, setTokenBot] = useState<string>();
  const [chatid, setChatId] = useState<string>();
  const [schedule, setSchedule] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [images, setImages] = useState<[] | string[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const sendDatos = async () => {
    try {
      setLoading(true)
      await Api.post("telegram/send", {
        tokenbot,
        chatid,
        schedule,
        message,
        images,
      });
      setLoading(false)
      alert("Mensagem programada !");
    } catch (error) {
      setLoading(false)
      alert("Error ao programar mensagem !");
    }
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        minHeight={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        borderRadius={"2rem"}
        margin={"auto"}
        backgroundColor={"white"}
        color={"black"}
        boxShadow={"1rem 1rem 2rem 0rem"}
      >
        <h1 id="title-h1">Programar Mensagem telegram</h1>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Token Bot:</label>
          <Input
            id="token-bot"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
            onChange={(e) => setTokenBot(e.target.value)}
            autoFocus
          />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Chat Id:</label>
          <Input
            id="chat-id"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
            onChange={(e) => setChatId(e.target.value)}
          />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Data e hora de envio:</label>
          <Input
            id="date-time"
            type="datetime-local"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Mensagem:</label>
          <Textarea
            id="mensagem"
            width={"48rem"}
            height={"3rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>
        </FormControl>

        <ImageUpload images={images} setImages={setImages} maxImages={8} />

        <Button
          padding={"1.5rem 2.3rem"}
          borderRadius={"1.3rem"}
          fontSize={"1.3rem"}
          fontWeight={"600"}
          backgroundColor={"#00a2ff"}
          color={"white"}
          border={"none"}
          cursor={"pointer"}
          _hover={{
            color: "#00a2ff",
            border: "1px solid",
            background: "white",
          }}
          marginBottom={"2rem"}
          onClick={sendDatos}
          isLoading={loading}
        >
          Programar mensagem
        </Button>
      </Flex>
    </>
  );
};

export default Home;
