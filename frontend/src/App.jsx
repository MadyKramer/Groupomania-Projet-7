//import logo from './logo.svg';
import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
// import axios from "axios";
// import { UidContext } from "./components/AppContext";
// import { useState, useEffect } from "react";




const App = () => {
  // //STATE
  // const [uid, setUid] = useState("");
  // //A chaque fois qu'on va appeler le context dans les components, on pourra recup l'userid 
  // //COMPORTEMENT
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}auth`,
  //     })
  //       .then((res) => {setUid(res.data); console.log(res.data)}) //err
  //       .catch((err) => console.log("Pas de Token"));
  //   };
  //   fetchToken();
    
  // }, [uid]);
  //RENDER
  return ( 
    // <UidContext.Provider value={uid}>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="connexion" element={<Auth />} />
        </Routes>
      </>
    // </UidContext.Provider>
  );
};

export default App;
