import styled from "styled-components";
import { User } from "./User";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  background-color: gold;
  border-radius: 15px;
  padding: 60px 50px;
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0;
  text-align: center;
`;
const Img = styled.img``;

export const Home = () => {
  return (
    <Container>
      <Wrap>
        <Logo>
          <Title>J Chat</Title>
          <Img />
        </Logo>
        <User />
      </Wrap>
    </Container>
  );
};
