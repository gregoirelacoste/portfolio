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
import { useTheme } from "@material-ui/core";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <RoutesEffect />
      </Layout>
    </Router>
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
