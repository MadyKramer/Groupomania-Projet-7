//import logo from './logo.svg';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import { UidContext } from "./components/AppContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const App = () => {
  //const [uid, setUid] = useState(null);
  //A chaque fois qu'on va appeler le context dans les components, on pourra recup l'userid '(user connecté ou pas? )
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}auth`,
  //     
  //     })
  //       .then((res) => setUid(res.data))
  //       .catch((err) => console.log("Pas de Token"));
  //   };
  //   fetchToken();
  // }, [uid]);
  return ( 
    //<UidContext.Provider value={uid}>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="connexion" element={<Auth />} />
        </Routes>
      </>
    //</UidContext.Provider>
  );
};

export default App;
