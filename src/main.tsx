import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/ubuntu";
import "./index.css";
import "./i18n/config";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-multi-carousel/lib/styles.css";

document.documentElement.classList.add("dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
