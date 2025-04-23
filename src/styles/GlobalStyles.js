import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  html {
  font-size: 62.5%;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
}
`;

export default GlobalStyles;
