import React from "react";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Browse, Home, SignUp } from "./pages";
import SignIn from "./pages/browse";
export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
