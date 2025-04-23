import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
  font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
}
`;

export default GlobalStyles;
