import axios from "axios";
import { useEffect, useState } from "react";
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const userDb = () => {
      axios
        .get("/chat")
        .then(function (res) {
          setUser(res.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    userDb();
  }, []);

  return (
    <Section>
      <Container>
        <ChatWrap />
        {loading ? <UserList userDb={user} /> : ""}
      </Container>
    </Section>
  );
};
