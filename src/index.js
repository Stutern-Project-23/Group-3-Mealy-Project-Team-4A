import React from "react";


import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { setAppElement } from "react-modal";
import store from "./redux/store";
const rootElement = document.getElementById("root");

setAppElement(rootElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
