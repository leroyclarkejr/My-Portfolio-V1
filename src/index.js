import React from "react";
import ReactDOM from "react-dom";
import "./css/base.css";
import "./css/style.scss";
import "pattern.css";
import App from "./components/App.js";

ReactDOM.render(
  <React.StrictMode>
    <App className="App" />
  </React.StrictMode>,
  document.getElementById("root")
);
