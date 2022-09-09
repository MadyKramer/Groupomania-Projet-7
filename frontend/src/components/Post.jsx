// import ReactDOM from 'react-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faMessage,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import TimeAgo from "react-timeago"
import frenchStrings from "react-timeago/lib/language-strings/fr"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"

const Post = ({ post }) => {
  //destructuring pour arriver directement à l'entrée de l'obj == props.post

  //STATE
  const [showComments, setShowComments] = useState(false);
  //COMPORTEMENT
  const formatter = buildFormatter(frenchStrings)
  const imgUrl = `${process.env.REACT_APP_API_URL}${post.postimg}`;
  if ({ imgUrl } == null) {
    //?
    return "";
  }
  const handleCommentaire = () => {
    setShowComments(!showComments);
  }

  //RENDER
  return (
    <div className="post">
      <div className="postHeader">
        <div className="userInfos">
          <p>{post.firstname} {post.lastname}</p>
          <p>{post.workstation}</p>
        </div>
        <div className="postDate">
        {/* <TimeAgo date={post.postdate} formatter={formatter} /> */}
        </div>
      </div>
      <div className="contentContainer">
        <div className="postContent">
          <img src={imgUrl} alt="" />
          <p>{post.content}</p>
        </div>
        <div className="postReacts">
          <FontAwesomeIcon icon={faMessage} className="postIcons" onClick={handleCommentaire} />
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
      {showComments && <h2>Commentaires</h2> }
    </div>
  );
};

export default Post;
