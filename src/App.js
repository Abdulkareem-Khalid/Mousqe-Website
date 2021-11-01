// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1> Home Page</h1>");
// });

// app.listen(5000, () => {
//   console.log("server started");
// });
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarBootstrap from "./Component/sidebar/SidebarBootstrap";
import "./Component/sidebar/sidebarStyle.css";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage/HomePage.js";
import Header from "./Component/header/Header";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
          <SidebarBootstrap />
        </nav>
        <Switch>
          <Route path="/registration">{/* <RegistrationPage /> */}</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
