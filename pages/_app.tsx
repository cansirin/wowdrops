import type { AppProps } from "next/app";
import { createClient } from "../apollo/src/utils/createClient";
import "../configureAmplify";
import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";

const client = createClient();

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #1F2B33;
    text-align: center;
    min-height: 100vh;
    font-size: calc(10px + 1vmin);
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Navbar router={router} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default MyApp;
