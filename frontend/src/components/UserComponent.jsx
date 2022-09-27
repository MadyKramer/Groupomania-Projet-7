
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";



const UserComponent = () => {
  //STATE
const {user, setUser} = useAuthContext();
  //COMPORTEMENT
  const navigate = useNavigate();
  const defaultImg = require("./../assets/defaultpicture.jpg");

  const Logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  //RENDER
  return (
    <aside className="divUser">
      <img className="userPic" src={defaultImg} alt="avatar" />
      <div className="userProperties">
        <div className="userName">
          <p tabIndex="0">
           {user.firstname} {user.lastname} 
          </p>
        </div>
        <div className="userWork">
          <p tabIndex="0">{user.workstation}</p>
        </div>
      </div>
      <div className="handleAccount">
        <button
          className="disconect handleAccountBtn"
          onClick={Logout}
          aria-label="Se déconnecter"
        >
          Déconnexion
        </button>
      </div>
    </aside>
  );
};

export default UserComponent;
