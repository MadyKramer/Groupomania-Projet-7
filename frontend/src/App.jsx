//import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import { UserContext } from "./utils/Context";
import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  //STATE
  const [isOnline, setIsOnline] = useState(false);
  const [isAdmin, setIsAdmin] = useState("");
  const [userId, setUserId] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState(" ");
  const [userWorkstation, setUserWorkstation] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
 console.log(decodeToken());

  //COMPORTEMENT

  const token = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const checkToken = () => {
    if (!decodedToken) {
      localStorage.removeItem("token");
      setIsOnline(false);
    } else if (decodedToken) {
      setUserId(decodedToken.userId);
      setUserFirstname(decodedToken.username.firstname);
      setUserLastname(decodedToken.username.lastname);
      setUserAvatar(decodedToken.username.avatar);
      setUserWorkstation(decodedToken.username.workstation);
      setIsAdmin(decodedToken.perm);
      setIsOnline(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, [isOnline]); 

  //RENDER

  return (
    <div>
      <UserContext.Provider
        value={{
          isOnline,
          setIsOnline,
          isAdmin,
          userId,
          userFirstname,
          userLastname,
          userWorkstation,
          userAvatar,
        }}
      >
        <>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="feed" element={<Main />} />
          </Routes>
        </>
      </UserContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
};

export default App;
