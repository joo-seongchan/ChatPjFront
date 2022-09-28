import styled from "styled-components";

const Wrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: gray;
`;

export const UserList = ({ userDb }) => {
  console.log(userDb);
  return (
    <Wrap>
      {userDb.map((user) => (
        <>
          <div>{user.username}</div>
          <div>{user.cha}</div>
        </>
      ))}
    </Wrap>
  );
};
