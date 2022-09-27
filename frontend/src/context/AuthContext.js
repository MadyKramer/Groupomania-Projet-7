import { createContext, useState, useEffect } from "react";
import { decodeToken } from "react-jwt";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const userInfos = decodeToken(token);
      const userLogin = {
        id: userInfos.username.id,
        lastname: userInfos.username.lastname,
        firstname: userInfos.username.firstname,
        email: userInfos.username.email,
        workstation: userInfos.username.workstation,
        hasright: userInfos.username.hasright,
        avatar: userInfos.username.avatar,
        token: token,
      };
      
      setUser(userLogin);
    }
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
