import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    letter-spacing: -1px;
    word-break: keep-all;
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: white;
}
li{
  text-decoration: none;
}
`;
