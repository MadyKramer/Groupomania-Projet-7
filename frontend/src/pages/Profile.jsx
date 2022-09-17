import React from "react";
import UserComponent from "../components/UserComponent";

const Profile = () => {
  return (
    <div className="bigContainer">
      <div className="mainWrapper">
        <div className="userProfile">
          < UserComponent />
        </div>
      </div>
    </div>
  );
};

export default Profile