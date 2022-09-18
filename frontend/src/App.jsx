//import logo from './logo.svg';
import React from "react";
import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

import { UserContext } from "./components/AppContext";
import { useState, useEffect } from "react";

const App = () => {
  //STATE
  // const [refreshPost, setRefreshPost] = useState(false);
  //COMPORTEMENT

  //RENDER

  return (
    // <UserContext.Provider value={refreshPost}>
      <>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="feed" element={<Main />} />
          <Route path="user" element={<Profile />} />
        </Routes>
      </>
    // </UserContext.Provider>
  );
};

export default App;
