import type { AppProps } from "next/app";
import { createClient } from "../apollo/src/utils/createClient";
import "../configureAmplify";
import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { websiteColors } from "../utils/website-colors";

const client = createClient();

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    flex-direction: column;
    color: white;
    background-color: ${websiteColors.blueWood};
    text-align: center;
    min-height: 100vh;
    font-size: calc(10px + 1vmin);
    font-family: 'Inter', sans-serif;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Navbar router={router} />
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
