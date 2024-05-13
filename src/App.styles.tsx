import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --navbar-height: 50px;
    --footer-height: 90px;
    --x-padding: 50px;
    background-color: ${(props) => props.theme.colors.rootBackground};
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'GomariceMixBit';
    color : white; // TODO: remove it
  }

  a {
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1;
  }
`;

export default GlobalStyles;
