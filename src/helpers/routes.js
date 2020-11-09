import React from "react";
import { Route, Redirect } from "react-router-dom";

export function isUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      reder={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              token={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
