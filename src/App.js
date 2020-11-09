import React from "react";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Browse, Home, SignUp, SignIn } from "./pages";
import { isUserRedirect } from "./helpers/routes";

export default function App() {
  const user = {};

  return (
    <Router>
      <Route exact path={ROUTES.SIGN_IN}>
        <isUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
