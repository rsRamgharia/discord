import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import React from "react";
import "../css/Login.css";
import Logo from "../discord-logo.png";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={Logo} alt="" />
      </div>
      <Button onClick={signIn} variant="contained" size="large" color="primary">
        Sign in
      </Button>
    </div>
  );
};

export default Login;
