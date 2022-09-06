// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  //STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //COMPORTEMENTS
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/auth/login`,
      data: {
        email,
        password
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.error.email; //A voir quand API connectée
          passwordError.innerHTML = res.data.error.password;
        } else {
          localStorage.setItem("token", res.data.token)
          console.log(res.data.token)
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //RENDER
  return (
    <form action="" onSubmit={handleLogin} className="formWrapper" id="loginForm">
      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="on"
      />
      <div className="email error"></div>
      <br />
      
      <label htmlFor="password">Mot de passe</label>
      <input
        name="password"
        id="password"
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
