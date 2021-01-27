import React, { useState } from "react";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client from "./graphql";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import Feedback from "../services/components/Feedback/Feedback";
import { feedbackVar } from "./graphql/cache/variables/feedback.var";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./theme";
import ColorSwitch from "./components/ColorSwitch";

const App = () => {
  const feedbackState = useReactiveVar(feedbackVar);
  const [light, setLight] = useState(false);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Routes />
          <ColorSwitch setTheme={setLight} light={light} />
          <Feedback
            isOpen={feedbackState.isOpen}
            modal={feedbackState.modal}
            message={feedbackState.message}
            type={feedbackState.type}
            error={feedbackState.error}
            setOpen={feedbackVar}
          />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
