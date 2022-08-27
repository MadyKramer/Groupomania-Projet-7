import React from "react";
import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Auth = () => { //Formulaire controlé? React-hook-form
  const [formDisplaying, setformDisplaying] = useState(true);
  const handleSignUp = () => {
    if (formDisplaying === true) {
      setformDisplaying(false);
    }
  };
  const handleLogin = () => {
    if (formDisplaying === false) {
      setformDisplaying(true);
    }
  };
  return (
    <div className="bigContainer">
      <div className="mainWrapper">
        <img
          className="logoLog"
          src={require("./../assets/groupo-slim.png")} //Importer logo et le mettre dans une var? 
          alt={"Logo Groupomania"}
        />
        <div className="logBtns">
        <button className="logBtn" onClick={handleSignUp}>
            S'inscrire
          </button>
          <button className="logBtn" onClick={handleLogin}>
            Se connecter
          </button>
          
        </div>
        {formDisplaying ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;
