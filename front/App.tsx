import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import EasterEgg from "./components/EasterEgg";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <EasterEgg />
    </ApolloProvider>
  );
};

export default App;
