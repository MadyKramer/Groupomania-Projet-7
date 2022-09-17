const UserComponent = () => {
  //STATE

  //COMPORTEMENT
  const defaultImg = require("./../assets/defaultpicture.jpg");
  //RENDER
  return (
    <div className="divUser">
      <img className="userPic" src={defaultImg} alt="" />
      <div className="userProperties">
        <div className="userName">
          <p>Nom de famille Prénom</p>
        </div>
        <div className="userWork">
          <p>workstation</p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
