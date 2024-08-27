import "./index.css";
import App from "./App";
import Greeting from "./components/Greeting";
import React from "react";
import ReactDOM from "react-dom/client";
import SocialLinks from "./components/SocialLinks";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
