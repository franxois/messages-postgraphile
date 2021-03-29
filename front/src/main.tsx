import React from "react";
import ReactDOM from "react-dom";
import { MyApolloProvider } from "./context/MyApolloProvider";
import { UserProvider } from "./context/User";

import "./index.css";
import App from "./App";

import "./main.less";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <MyApolloProvider>
        <App />
      </MyApolloProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
