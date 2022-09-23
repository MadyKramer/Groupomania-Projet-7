import { useState, useContext } from "react";
import { UserContext } from "../utils/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CreatePost = ({ setReload, reload }) => {
  //STATE
  const [errorMsg, setErrorMsg] = useState("");
  const [postimg, setPostImg] = useState("");
  const [content, setContent] = useState("");
  const {
    userId,
    userFirstname,
    userLastname,
    userWorkstation,
    isOnline,
    setisOnline,
  } = useContext(UserContext);

  //COMPORTEMENTS
  const token = localStorage.getItem("token");

  const handleCreatePost = (e) => {
    e.preventDefault();

    let postCreate = { content, postimg };
    console.log(postimg);
    if (postimg.length > 0) {
      console.log(postimg);
      postCreate = new FormData();
      postCreate.append("image", postimg[0]);
      postCreate.append("content", content);
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}api/posts`, postCreate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setContent("");
        setPostImg("");
        setReload(true);
        window.location.reload();
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  };
  let postPossibility = null;
  if (!content && !postimg) {
    postPossibility = 
     ""
  
  } else {
    postPossibility = (
    <input
      onClick={handleCreatePost}
      type="submit"
      value="Postez!"
      className="postBtn"
      aria-label="Envoyer "
    ></input>);
  }
  //RENDER
  return (
    <div>
      <div className="createPostContainer">
        <div className="createPostContent">
          <form
            action=""
            className="writeNews"
            onSubmit={handleCreatePost}
            id="createPostForm"
          >
            {/* PP */}
            <label htmlFor="createPost"></label>
            <input
              name="createPost"
              id="createPost"
              className="createPostInput"
              type="textarea"
              aria-label="Ecrivez votre contenu"
              placeholder={`Quoi de neuf ${userFirstname}?`}
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></input>
            <div className="createPostOptions">
              <span>
                <input
                  type="file"
                  id="sendImg"
                  className="sendImg"
                  aria-label="envoyer une image"
                  onChange={(e) => setPostImg(e.target.files)}
                ></input>
                <label htmlFor="sendImg">
                  <FontAwesomeIcon
                    icon={faImage}
                    tabIndex="0"
                    className="createPostIcon"
                  />
                </label>
              </span>

            {postPossibility}
            </div>
          </form>
        </div>
        {errorMsg && <h3>{errorMsg}</h3>}
      </div>
    </div>
  );
};

export default CreatePost;
