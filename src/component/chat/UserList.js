import styled from "styled-components";

const Wrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: #a0afbc;
  border: 1px solid black;
`;

const UserWrap = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px dotted black;
`;
const Cha = styled.div`
  width: 3vw;
  height: 3vw;
  border: 1px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 0.8vw;
`;
const Username = styled.div`
  font-size: 1.7vw; ;
`;

export const UserList = ({ userDb }) => {
  console.log(userDb);
  return (
    <Wrap>
      {/* {userDb.map((user) => ( */}
      <UserWrap>
        <Cha>호랑이</Cha>
        <Username sername>아이디</Username>

        {/* <Username sername>{user.username}</Username>
          <Cha>{user.cha}</Cha> */}
      </UserWrap>
      {/* ))} */}
    </Wrap>
  );
};
