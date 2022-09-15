//import logo from './logo.svg';
import React from "react";
import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import axios from "axios";
import { UserContext } from "./components/AppContext";
import { useState, useEffect } from "react";

const App = () => {
  //STATE
  const [refreshPost, setRefreshPost] = useState(false);
  //COMPORTEMENT

  //RENDER

  return (
    // <UserContext.Provider value={refreshPost}>
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
