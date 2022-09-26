import { useContext} from "react";
import { UserContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";


const UserComponent = () => {
  //STATE

  //COMPORTEMENT
  const navigate = useNavigate();
  const {
    userId,

    userFirstname,
    userLastname,
    userWorkstation,
    isOnline,
    setIsOnline,
  } = useContext(UserContext);

  const defaultImg = require("./../assets/defaultpicture.jpg");




  const Logout = () => {
   
    setIsOnline(false);
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
           {userFirstname} {userLastname} 
          </p>
        </div>
        <div className="userWork">
          <p tabIndex="0">{userWorkstation}</p>
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
