//import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { UserContext } from './utils/Context'
import { useState } from "react";


const App = () => {
  //STATE
  const [isAdmin, setIsAdmin] = useState("");
 
  //COMPORTEMENT

  //RENDER

  return (<div>
    <UserContext.Provider value={isAdmin}>
      <>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="feed" element={<Main />} />
          <Route path="user" element={<Profile />} />
        </Routes>
      </>
    </UserContext.Provider>
    </div>
  );
};

export default App;
