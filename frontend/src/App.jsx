//import logo from './logo.svg';
import React from "react";
import { ReactDOM } from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import axios from "axios";
import { UserContext } from "./components/AppContext";
import { useState, useEffect } from "react";




const App = () => {
  //STATE
  // const [userInfo, setUserInfo] = useState("");
  //A chaque fois qu'on va appeler le context dans les components, on pourra recup l'obj user 
  //COMPORTEMENT
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}api/profiles/:id`,
  //     })
  //       .then((res) => {setUserInfo(res.data); console.log(res.data)}) 
  //       .catch((err) => console.log("Pas récupéré obj user"));
  //   };
  //   fetchUser();
    
  // }, [userInfo]);
  //RENDER
  return ( 
    // <UserContext.Provider value={userInfo}>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="connexion" element={<Auth />} />
        </Routes>
      </>
    // </UserContext.Provider>
  );
};

export default App;
