import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "../containers/footer";

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");

  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "" || firstName === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            display: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setEmailAdress("");
        setPassword("");
        setFirstName("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              placeholder="Email Adress"
              value={emailAddress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />

            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign In Now</Form.Link>
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
