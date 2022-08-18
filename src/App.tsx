import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMoralis } from "react-moralis";
import "./App.css";
import Views from "./views";
// import "../node_modules/react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Views />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
