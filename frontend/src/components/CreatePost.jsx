import { useState} from "react";
// import { UserContext } from '../utils/Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const CreatePost = ({setReload, reload}) => {
  //STATE
  const [errorMsg, setErrorMsg] = useState("");
  const [postimg, setPostImg] = useState("");
  const [content, setContent] = useState("");
 

  //COMPORTEMENTS
 const token = localStorage.getItem("token");

  const handleCreatePost = (e) => {
    e.preventDefault();
    
    let postCreate = { content, postimg };  
    console.log(postimg)
    if (postimg.length > 0) {
      console.log(postimg)
      postCreate = new FormData();
      postCreate.append("image", postimg[0]);
      postCreate.append("content", content);
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}api/posts`, postCreate,{
        headers: { Authorization: `Bearer ${token}`},
      })
      .then((res) => {
       
        setContent("");
        setPostImg("");
        setReload(true);
        window.location.reload()

      })
      .catch((err) => {
        setErrorMsg(err);
      });
    }
  //RENDER
  return (
    <div className="bigContainer">
      {/* <img src={whiteLogo} alt="" className="whiteLogo" /> */}
      <div className="mainWrapper">
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
                placeholder={`Quoi de neuf ?`}
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></input>
              <div className="createPostOptions">
                <span>
                  <input type="file" id="sendImg" className="sendImg" onChange={(e) => setPostImg(e.target.files)}></input>
                  <label htmlFor="sendImg"><FontAwesomeIcon icon={faImage} className="createPostIcon" /></label>
                </span>
                <input
                  onClick={handleCreatePost}
                  type="submit"
                  value="Postez!"
                  className="postBtn"
                ></input>
              </div>
            </form>
            
          </div>
          {errorMsg && <h3>{errorMsg}</h3>}
        </div>
      </div>
    </div>
  );
}
  

export default CreatePost;
