import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
  body {
    background-color:   ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.font.normal};
    font-size: 1.1rem;
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
