// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //COMPORTEMENTS
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/auth/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err.response);
        emailError.innerHTML = err.response.data.message;
        console.log(err.data.response.message)
      });
  };

  //RENDER
  return (
    <form
      action=""
      onSubmit={handleLogin}
      className="formWrapper"
      id="loginForm"
    >
      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="E-mail"
        aria-label="Adresse email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="on"
      />
      <div className="email"></div>
      <br />

      <label htmlFor="password">Mot de passe</label>
      <input
        name="password"
        id="password"
        aria-label="mot de passe"
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="on"
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Connexion" className="loginBtn"></input>
    </form>
  );
};

export default Login;
