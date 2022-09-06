import { useState, useContext } from "react";
import { UidContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";


const CreatePost = () => {
  //STATE
  //COMPORTEMENTS
  const whiteLogo = "../assets/icon-left-font-monochrome-white.png"
  const user= useContext(UidContext);
  console.log(UidContext)
  const [writePost, setwritePost] = useState([]);
  const handlecreatePost = async (e) => {
    e.preventDefault();
    /*const postContainerError = document.querySelector(".createPost.error"); <--- Faire req Axios et inclure innerHTML dans le .then()*/
  };
  //RENDER
  return (
    <div className="bigContainer">
      <img src={whiteLogo} alt="" className="whiteLogo" />
      <div className="mainWrapper">
        <div className="createPostContainer">
          <div className="createPostContent">
            <form action="" className="writeNews" onSubmit={handlecreatePost} id="createPostForm">
              {/* PP */}
              <label htmlFor="createPost"></label>
              <input
                name="createPost"
                id="createPost"
                className="createPostInput"
                type="textarea"
                placeholder={`Quoi de neuf ${user}?`}
                onChange={(e) => setwritePost(e.target.value)}
                value={writePost}
              ></input>
              <div className="createPostOptions">
                <FontAwesomeIcon
                  icon={faImage}
                  className="createPostIcon"
                />
                <input
                  type="submit"
                  value="Postez!"
                  className="postBtn"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
