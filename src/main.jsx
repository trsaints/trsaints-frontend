import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./reset.css";
import "./index.css";
import "./interactions.css";
import "./animations.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
