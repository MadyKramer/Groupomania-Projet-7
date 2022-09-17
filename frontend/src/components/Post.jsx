// import ReactDOM from 'react-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faMessage,
  faImage,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import CommentsContainer from "./CommentsContainer";
import axios from "axios";

const Post = ({ post }) => {
  //destructuring pour arriver directement à l'entrée de l'obj == props.post
console.log(post)
  //STATE
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [commentcontent, setCommentContent] = useState("");
  const [userId, setUserId] = useState("");

  //COMPORTEMENT
  const formatter = buildFormatter(frenchStrings);

  const token = localStorage.getItem("token");
  const imgUrl = `${process.env.REACT_APP_API_URL}${post.postimg}`;
  if ({ imgUrl } == null) {
    //?
    return "";
  }
  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleDeletePost = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}api/posts/${post.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert("publication supprimée!");
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  };

  const sendComment = (e) => {
    let body = {
      userId: userId,
      post_id: post.id,
      commentcontent: commentcontent,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}api/posts/${post.id}/comments`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("commentaire posté!");
        setUserId("");
      })
      .catch((err) => {
        console.log("fail");
        console.log(err);
      });
  };

  const handleLike = (e) => {
    let likeValue = like ? 0 : 1;

    setLike(!like);
    setisLiked((current) => !current);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}api/posts/${post.id}/like`,
        {
          value: likeValue,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(likeValue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //RENDER
  return (
    <div className="post">
      <div className="postHeader">
        <div className="userInfos">
          {/* <img src={post.avatar} alt="userpicture" /> */}
          <p>
            {post.firstname} {post.lastname}
          </p>
          <p className="workstationHeader">{post.workstation}</p>
        </div>
        <div className="postDate">
          <TimeAgo date={post.postdate} formatter={formatter} />
        </div>
      </div>
      <div className="contentContainer">
        <div className="postContent">
          <div className="handlePostIcons">
            <FontAwesomeIcon icon={faPenToSquare} className="handlePost" />
            <FontAwesomeIcon
              icon={faTrashCan}
              className="handlePost"
              onClick={handleDeletePost}
            />
          </div>
          <img src={imgUrl} alt="" />
          <p>{post.content}</p>
          {errorMsg && <h3>{errorMsg}</h3>}
        </div>
        <div className="postReacts">
          <FontAwesomeIcon
            icon={faMessage}
            className="postIcons"
            onClick={handleComment}
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={isLiked ? "isLiked" : "postIcons"}
            onClick={handleLike}
          />
        </div>
        <div className="writeComment">
          <input
            className="writeCommentInput"
            placeholder="Ajouter un commentaire..."
            onChange={(e) => setCommentContent(e.target.value)}
          ></input>
          <button className="commentButton" onClick={sendComment}>
            Envoyer
          </button>
        </div>
      </div>
      {showComments && <CommentsContainer post={post} />}
    </div>
  );
};

export default Post;
