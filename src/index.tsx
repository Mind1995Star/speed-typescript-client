import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://nplbzr7aq7ub.usemoralis.com:2053/server"
      appId="Bkh53hoQ3WNZfq5zPorvj0aTZ0P4LbF38I61WW6F"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
