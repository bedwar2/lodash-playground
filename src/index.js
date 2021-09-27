import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Navigation } from "./components/Navigation";
import reportWebVitals from "./reportWebVitals";
import About from "./components/About";
import Users from "./components/Users";
import { Arrays } from "./components/Arrays";
import { Collections } from "./components/Collections";
import LodashUdemy from "./components/LodashUdemy/LodashUdemy";

ReactDOM.render(
  <React.StrictMode>
    <header className="App-header">
      <Navigation></Navigation>
    </header>
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/arrays">
          <Arrays />
        </Route>
        <Route path="/collections">
          <Collections />
        </Route>
        <Route path="/lodashudemy">
          <LodashUdemy />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
