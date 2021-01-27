import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import Home from "../Views/Home";
import Layout from "../Layout";
import About from "../Views/About";
import References from "../Views/References";
import { LINKS } from "../config";
import Experiences from "../Views/Experiences";
import { useTransition, animated } from "react-spring";
import { springEffect } from "../theme/effect";
import withTracker from "../../services/googleAnalytics/withTracker";
import { ThemeProvider, useTheme } from "@material-ui/core";
import { useReactiveVar } from "@apollo/client";
import { themeVar } from "../graphql/cache/variables/theme.var";
import { getTheme } from "../theme/switchTheme";
import ColorSwitch from "../components/ColorSwitch";
import Feedback from "../../services/components/Feedback/Feedback";

const Routes = () => {
  const theme = useReactiveVar(themeVar);

  return (
    <ThemeProvider theme={getTheme(theme.type)}>
      <Router>
        <Layout>
          <RoutesEffect />
        </Layout>
      </Router>
      <ColorSwitch />
      <Feedback />
    </ThemeProvider>
  );
};

const RoutesEffect = () => {
  const { location } = useContext(__RouterContext);
  const theme = useTheme();
  const transitions = useTransition(
    location,
    (location) => location.pathname,
    // @ts-ignore
    springEffect(theme).pageTransition
  );
  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route
                path={LINKS.about}
                component={withTracker(About, { title: "A propos" })}
              />
              <Route
                path={LINKS.ref}
                component={withTracker(References, { title: "Références" })}
              />
              <Route
                path={LINKS.exp}
                component={withTracker(Experiences, { title: "Expériences" })}
              />
              <Route
                path={LINKS.home}
                component={withTracker(Home, { title: "Accueil" })}
              />
            </Switch>
          </animated.div>
        );
      })}
    </>
  );
};

export default Routes;
