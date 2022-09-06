// import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faMessage,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  //destructuring pour arriver directement à l'entrée de l'obj == props.post

  //STATE
  //COMPORTEMENT
  const imgUrl = `${process.env.REACT_APP_API_URL}${post.postimg}`;
  if ({ imgUrl } == null) {
    //?
    return "";
  }

  //RENDER
  return (
    <div className="post">
      <div className="postHeader">
        <div className="userInfos">
          <p>nom prénom</p>
          <p>poste</p>
        </div>
        <div className="postDate">
          <p>{post.postdate}</p>
        </div>
      </div>
      <div className="contentContainer">
        <div className="postContent">
          <img src={imgUrl} alt="" />
          <p>{post.content}</p>
        </div>
        <div className="postReacts">
          <FontAwesomeIcon icon={faMessage} className="postIcons" />
          <FontAwesomeIcon icon={faThumbsUp} className="postIcons " />
        </div>
        <div className="writeComment">
          <input
            className="writeCommentInput"
            placeholder="Ajouter un commentaire..."
          ></input>
          <FontAwesomeIcon icon={faImage} className="sendImgComment" /> 
          <button className="commentButton">Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
