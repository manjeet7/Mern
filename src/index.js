import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTempelate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  timeout: 500,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTempelate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
