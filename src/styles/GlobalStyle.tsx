import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Ubuntu', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
