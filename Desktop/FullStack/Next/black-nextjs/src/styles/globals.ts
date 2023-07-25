import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
     outline: none;
    color: white;

   
  }  
  body{
    background-color: #333333;
    margin: 400px auto;
    width: 600px;
  }

  p, h1, h2, h3, h4, h5, h6 {
    color: white;
  }

  ul, ol {
    list-style: none;
  }
`;
