import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//STATE
const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [workstation, setWorkstation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    firstname,
    lastname,
    workstation,
    email,
    password,
  };
  //COMPORTEMENTS
  const handleRegistrer = async (e) => {
    e.preventDefault();
    const error = document.querySelector(".errorMessage");
    console.log(error)

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/auth/signup`,
      data,
    })
      .then((res) => {
        alert(
          "Vous êtes bien enregistré(e)! Veuillez vous connecter pour avoir accès à votre espace"
        );
      })
      .catch((err) => {
        console.log(err);
        error.innerHTML = err.response.data.message;

      });
  };

  //RENDER
  return (
    <form
      action=""
      className="formWrapper"
      onSubmit={handleRegistrer}
      id="SignUpForm"
    >
     <div className="errorMessage"></div>
      {/* <input name="avatar" id="avatar" className="avatar" type="file" /> */}
      <label htmlFor="firstName"> Prénom </label>
      <input
        name="firstName"
        id="firstName"
        className="firstName"
        type="text"
        placeholder="Prénom"
        aria-label="Prénom"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstname}
      />

      <label htmlFor="lastName"> Nom </label>
      <input
        name="lastName"
        id="lastName"
        className="lastName"
        aria-label="Nom de famille"
        type="text"
        placeholder="Nom"
        onChange={(e) => setLastName(e.target.value)}
        value={lastname}
      />

 
      <label htmlFor="workstation">Poste Occupé</label>
      <input
        name="workStation"
        id="workStation"
        className="workStation"
        aria-label="poste occupé"
        type="text"
        placeholder="Poste Occupé"
        onChange={(e) => setWorkstation(e.target.value)}
        value={workstation}
      />

  
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        className="email"
        aria-label="email"
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Mot de passe</label>
      <input
        name="password"
        id="password"
        className="password"
        aria-label="mot de passe"
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
  
      <input type="submit" value="Inscription" className="loginBtn" aria-label="Envoyer"></input>
    </form>
  );
};

export default SignUp;
