// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
  }

  input {
    padding: 0.5rem;
    margin: 0 1rem;
  }
`;

export default GlobalStyle;
