import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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

  button {
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default GlobalStyles;
