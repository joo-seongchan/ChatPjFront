import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div``;
const Title = styled.div`
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
`;
const Subtitle = styled.div`
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  all: unset;
  display: block;
  width: 250px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  padding-left: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  &:focus {
    font-size: 18px;
    font-weight: 600;
  }
`;
const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Radio = styled.input`
  display: none;
`;
const Label = styled.label`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  all: unset;
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: yellowgreen;
`;

const Error = styled.div`
  display: inline-block;
  font-size: 14px;
  margin-left: 15px;
  color: red;
`;

export const User = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: `onChange` });
  const [label, setLabel] = useState(1);
  const nav = useNavigate();
  const submit = (data) => {
    console.log(data);
    axios
      .post(`/`, data)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    nav(`/chat`);
  };

  return (
    <Wrap>
      <Title>프로필</Title>
      <form onSubmit={handleSubmit(submit)}>
        <Subtitle>닉네임</Subtitle>
        <Error>{errors?.username?.message}</Error>
        <Input
          type="text"
          placeholder="Nick Name"
          name="닉네임"
          value="사람"
          {...register("username", { required: "닉네임은 필수입니다." })}
        />

        <Subtitle>캐릭터</Subtitle>
        <RadioWrap>
          <Radio
            {...register("cha")}
            type="radio"
            name="cha"
            value="bear"
            id="radio1"
            checked
          />
          <Label
            onClick={() => setLabel(1)}
            style={{ borderWidth: `${label === 1 ? "3px" : "1px"}` }}
            htmlFor="radio1"
            checked
          >
            <div>곰</div>
          </Label>
          <Radio
            {...register("cha")}
            type="radio"
            name="cha"
            value="rabbit"
            id="radio2"
          />
          <Label
            onClick={() => setLabel(2)}
            style={{ borderWidth: `${label === 2 ? "3px" : "1px"}` }}
            htmlFor="radio2"
          >
            <div>토끼</div>
          </Label>
          <Radio
            {...register("cha")}
            type="radio"
            name="cha"
            value="pig"
            id="radio3"
          />
          <Label
            onClick={() => setLabel(3)}
            style={{ borderWidth: `${label === 3 ? "3px" : "1px"}` }}
            htmlFor="radio3"
          >
            <div>돼지</div>
          </Label>
          <Radio
            {...register("cha")}
            type="radio"
            name="cha"
            value="lion"
            id="radio4"
          />
          <Label
            onClick={() => setLabel(4)}
            style={{ borderWidth: `${label === 4 ? "3px" : "1px"}` }}
            htmlFor="radio4"
          >
            <div>사자</div>
          </Label>
        </RadioWrap>

        <Button style={{ opacity: `${isValid ? 1 : 0.7}` }} type="submit">
          입장하기
        </Button>
      </form>
    </Wrap>
  );
};
