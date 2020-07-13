import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/home/HomePage.js";
import AboutScreen from "./screens/about/AboutPage.js";
import Header from "./components/common/Header.js";
import PageNotFound from "./components/404/PageNotFound.js";
import LoginPage from "./components/login/Login";
import Dashboard from "./screens/dashboard/dashboard";
import "rsuite/dist/styles/rsuite-dark.min.css";
function App(props) {
  return (
    <div className="container-fluid">
      {/* <Header /> */}

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
