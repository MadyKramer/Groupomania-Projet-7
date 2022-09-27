//import logo from './logo.svg';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
// import { UserContext } from "./utils/Context";
// import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostsContainer from "./pages/PostsContainer";
import { useAuthContext } from "./hooks/useAuthContext";
const App = () => {
  //STATE
  // const [isOnline, setIsOnline] = useState(false);
  
  //COMPORTEMENT
const {user} = useAuthContext();
  // useEffect(() => {
  // }, [isOnline]); 

  //RENDER

  return (
    <div>

          <Routes>
            <Route path="/" element={ !user ? <Auth /> : <Navigate to="feed" />} />
            <Route path="feed" element={ user ? <PostsContainer /> : <Navigate to="/" /> } />
          </Routes>

     
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
