import { useEffect } from "react";
import styled from "styled-components";
import { ChatWrap } from "./ChatWrap";
import { UserList } from "./UserList";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 50%;
  height: 70%;
  background-color: red;
  display: flex;
`;

export const Chat = () => {
  useEffect(()=>{},[])
  return (
    <Section>
      <Container>
        <ChatWrap />
        <UserList />
      </Container>
    </Section>
  );
};
