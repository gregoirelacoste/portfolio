import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Views/Home";
import Layout from "../Layout";
import About from "../Views/About";
import References from "../Views/References";
import { LINKS } from "../config";
import Experiences from "../Views/Experiences";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={LINKS.about} component={About} />
          <Route path={LINKS.ref} component={References} />
          <Route path={LINKS.exp} component={Experiences} />
          <Route path={LINKS.home} component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default Routes;
