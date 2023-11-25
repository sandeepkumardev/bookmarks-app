import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActionProvider } from "./context/ActionProvider";
import { StoreProvider } from "./context/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <ActionProvider>
        <App />
      </ActionProvider>
    </StoreProvider>
  </React.StrictMode>
);
