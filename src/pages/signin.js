import React, { useState, useContext } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";
  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAdress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email adress "
              value={emailAddress}
              onChange={({ target }) => setEmailAdress(target.value)}
            ></Form.Input>

            <Form.Input
              placeholder="Password"
              autoComplete="off"
              value={password}
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to MovieFlix? <Form.Link to="/signup">Sign Up Now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPCTHA to ensure you are not a
              bot. Learn More.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
