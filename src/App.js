import React, { Component } from 'react';
import { Route, withRouter, Switch } from "react-router-dom";

import './App.css';

import Layout from "./hoc/Layout";
import Home from "./containers/Home";
import About from "./containers/About";
import Gallery from "./containers/Gallery";
import Loc from "./containers/Location";
import Contact from "./containers/Contact";

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/classes" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/location" component={Loc} />
        <Route path="/" exact component={Home} />
      </Switch>
    );

    return (
      <React.Fragment>
        <Layout>
          {routes}
        </Layout>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
