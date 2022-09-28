import styled from "styled-components";

const HChatWrap = styled.div`
  width: 70%;
  height: 100%;
`;
const ViewWrap = styled.div`
  width: 100%;
  height: 70%;
  background-color: lightgray;
`;
const Chats = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`;
const Input = styled.input`
  all: unset;
  width: 75%;
  height: 100%;
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
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatWrap = () => {
  return (
    <HChatWrap>
      <ViewWrap></ViewWrap>
      <Chats>
        <Input />
        <ButtonWrap>
          <Button>전송</Button>
        </ButtonWrap>
      </Chats>
    </HChatWrap>
  );
};
