import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMoralis } from "react-moralis";
import "./App.css";
import Views from "./views";

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
  // const {
  //   authenticate,
  //   isAuthenticated,
  //   isAuthenticating,
  //   user,
  //   account,
  //   logout,
  // } = useMoralis();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // add your logic here
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated]);

  // const login = async () => {
  //   if (!isAuthenticated) {
  //     await authenticate({
  //       provider: "metamask",
  //     })
  //       .then(function (user) {
  //         console.log("logged in user:", user);
  //         console.log(user!.get("ethAddress"));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // };

  // const logOut = async () => {
  //   await logout();
  // };

  // return (
  //   <div className="App">
  //     <button onClick={login} className="p-4 text-white bg-black rounded-md">
  //       login
  //     </button>
  //     <button onClick={logOut}>logout</button>
  //   </div>
  // );
}

export default App;
