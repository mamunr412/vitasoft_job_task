import React from "react";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithSocial from "./LoginWithSocial";
import "../../style/login.css";
import Divider from "../utils/Divider";

function Login() {
  return (
    <div className="text-center mt-20 mx-auto pb-10">
      <div className="loginTextHolder">
        <h2 className="signInText">Sign In</h2>
        <p className="welcomeText">Welcome back, you’ve been missed!</p>
      </div>
      <LoginWithSocial />
      <Divider />
      <LoginWithEmail />

      <div className="mt-10 text-center">
        <p>Email: eve.holt@reqres.in</p>
        <p>Password: cityslicka</p>
      </div>
    </div>
  );
}

export default Login;
