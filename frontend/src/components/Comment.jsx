import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Comment = ({ comment, post }) => {
  //== props.comment
  //STATE
  const [errorMsg, setErrorMsg] = useState("");
  //COMPORTEMENT
  const token = localStorage.getItem("token");
  const handleDeleteComment = () => {
   
    axios
    .delete(`${process.env.REACT_APP_API_URL}api/posts/${post.id}/comments/${comment.id}`, {
      headers: { Authorization: `Bearer ${token}` },
      
    })
    .then(res => {
      alert("commentaire supprimé ! ✨");
      window.location.reload()
    })
    .catch((err) => {
      setErrorMsg(err);
  
    });
  }

  //RENDER
  return (
    <div className="comment">
      <div className="commentHeader">
        <div className="commentUser">
          <p>
            {comment.firstname} {comment.lastname}
          </p>
        </div>
        <div className="handleCommentsIcons">
          <FontAwesomeIcon icon={faPenToSquare} className="handleComment" />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="handleComment"
            onClick={handleDeleteComment}
            
          />
        </div>
      </div>
      <div className="commentContent">
        <p>{comment.commentcontent}</p>
        {errorMsg && <h3>{errorMsg}</h3>}
      </div>
    </div>
  );
};

export default Comment;
