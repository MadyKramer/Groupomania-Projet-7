import { useState, useContext } from "react";
import { UserContext } from "../utils/Context";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditComment from "./EditComment";
import { toast } from 'react-toastify'
import { getDatas } from "../utils/getDatas";

const Comment = ({ comment, post, setPostList }) => {
  //== props.comment

  //STATE

  const [displayModale, setDisplayModale] = useState(false);
  const context = useContext(UserContext);
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
  console.log(context);
  let handleComments = null;
  if (context.isAdmin === 1 || context.userId === comment.users_id) {
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
