//import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { UserContext } from "./utils/Context";
import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostsContainer from "./components/PostsContainer";

const App = () => {
  //STATE
  const [isOnline, setIsOnline] = useState(false);
  
  //COMPORTEMENT

  const token = localStorage.getItem("token");
//  const dataUser = decodeToken(token)

//  console.log(dataUser.username)
 

  useEffect(() => {
    // checkToken();
  }, [isOnline]); 

  //RENDER

  return (
    <div>
      <UserContext.Provider
        value={{
          isOnline,
          setIsOnline      
        }}
      >
        <>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="feed" element={<PostsContainer />} />
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
