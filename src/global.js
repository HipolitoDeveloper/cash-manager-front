import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-red: #EF7767;
    --color-dark-green: #19252E;
    --color-light-green: #5FC2A5;
    --color-grey: #E1E5F2;
    --color-green: #1E7F64;
    
  
  }

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: SourceSansPro;
  }

  html, body, #root, .App {
    height: 100%;
  }
  
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 1080px) {
      font-size: 93.75%
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
 
  button, input, select {
    cursor: pointer;
    outline: none;
    border: none; 
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  a {
    text-decoration: none;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--color-background) inset;
    box-shadow: 0 0 0 30px var(--color-background) inset;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: var(--color-text) !important;
  }



`;

export default GlobalStyle;