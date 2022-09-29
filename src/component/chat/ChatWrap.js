import axios from "axios";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import styled from "styled-components";

const HChatWrap = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid black;
  border-right: none;
`;
const ViewWrap = styled.div`
  width: 100%;
  height: 70%;
  background-color: lightgray;
  border: 1px solid black;
  background-color: #bacee0;
  border-right: none;
`;
const Chats = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: white;
  form {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
const Input = styled.input`
  all: unset;
  width: 75%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
const ButtonWrap = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  all: unset;
  width: 50%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const ChatWrap = () => {
  const [chat, setChat] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: `onChange` });

  const submit = (data) => {
    axios
      .post("/chat", data)
      .then((res) => {
        console.log(res.data);
        setChat(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <HChatWrap>
      <ViewWrap></ViewWrap>
      <Chats>
        <form onSubmit={handleSubmit(submit)}>
          <Input {...register("text", { required: "" })} />
          <ButtonWrap>
            <Button>전송</Button>
          </ButtonWrap>
        </form>
      </Chats>
    </HChatWrap>
  );
};
