import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://github.com/jaredpalmer/the-platform#stylesheet";
document.head.appendChild(styleLink);

ReactDOM.render(<App />, document.getElementById("app"));