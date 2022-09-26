import { useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditComment from "./EditComment";
import { toast } from 'react-toastify'
import { getDatas } from "../utils/getDatas";

const Comment = ({ comment, post, setPostList, isAdmin, idUser }) => {
  //== props.comment

  //STATE

  const [displayModale, setDisplayModale] = useState(false);

  //COMPORTEMENT
  const token = localStorage.getItem("token");
  const handleDeleteComment = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}api/posts/${post.id}/comments/${comment.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        getDatas(setPostList);
        toast.success("commentaire supprimé ! ✨");

      })
      .catch((err) => {
        toast.error("Oups, quelque chose s'est mal passé! 🤔")
      });
  };

  let handleComments = null;
  if (isAdmin === 1 || idUser === comment.users_id) {
    handleComments = (
      <div className="handleCommentsIcons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="handleComment"
          onClick={() => setDisplayModale(true)}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="handleComment"
          onClick={handleDeleteComment}
        />
      </div>
    );
  } else {
    handleComments = "";
  }

  //RENDER
  return (
    <div className="comment">
      <div className="commentHeader">
        <div className="commentUser">
          <p>
            {comment.firstname} {comment.lastname}
          </p>
          {displayModale && (
            <EditComment
              post={post}
              comment={comment}
              closeModale={setDisplayModale}
            />
          )}
        </div>
          {handleComments}
      </div>
      <div className="commentContent">
        
        <p>{comment.commentcontent}</p>
      </div>
    </div>
  );
};

export default Comment;
