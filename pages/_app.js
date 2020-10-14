import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: arial;
  }

  h1, h2, h3, h4, h5, h6, h7, p {
    float: left;
    width: 100%;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
