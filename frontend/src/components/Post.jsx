// import ReactDOM from 'react-dom'
import { useContext, useState } from "react";
import { UserContext } from "../utils/Context";
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
import EditPost from "./EditPost";

const Post = ({ post }) => {
  //destructuring pour arriver directement à l'entrée de l'obj == props.post

  //STATE
  const [displayModale, setDisplayModale] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [commentcontent, setCommentContent] = useState("");
  const [userId, setUserId] = useState("");
  const context = useContext(UserContext);

  //COMPORTEMENT
  const formatter = buildFormatter(frenchStrings);
  const token = localStorage.getItem("token");
  const imgUrl = `${process.env.REACT_APP_API_URL}${post.postimg}`;


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
        window.location.reload();
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
    console.log(likeValue);
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
  let handleBtn = null;
  if (context.isAdmin === 1 || context.userId === post.users_id) {
    handleBtn = (
      <div className="handlePostIcons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="handlePost"
          tabIndex="0"
          aria-label="modification du poste"
          onClick={() => setDisplayModale(true)}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          tabIndex="0"
          className="handlePost"
          aria-label="Supprimer le poste"
          onClick={handleDeletePost}
        />
      </div>
    );
  } else {
    handleBtn = "";
  }
  //RENDER
  return (
    <div className="post">
      <div className="postHeader">
        <div className="userInfos">
          {/* <img src={post.avatar} alt="userpicture" /> */}
          <p tabIndex="0">
            {post.firstname} {post.lastname}
          </p>
          <p className="workstationHeader" tabIndex="0">
            {post.workstation}
          </p>
        </div>
        <div className="postDate">
          <TimeAgo
            date={post.postdate}
            formatter={formatter}
            tabIndex="0"
            aria-label="date de publication"
          />
        </div>
      </div>
      <div className="contentContainer">
        <div className="postContent">
          {handleBtn}
          {imgUrl !== "http://localhost:4500/null" && (
            <img src={imgUrl} alt="" />
          )}
          <p>{post.content}</p>
          {displayModale && (
            <EditPost data={post} closeModale={setDisplayModale} />
          )}
          {errorMsg && <h3>{errorMsg}</h3>}
        </div>
        <div className="postReacts">
          <FontAwesomeIcon
            icon={faMessage}
            className="postIcons"
            tabIndex="0"
            aria-label="Ouvrir la section commentaires"
            onClick={handleComment}
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            aria-label="Liker la publication"
            tabIndex="0"
            className={isLiked ? "isLiked" : "postIcons"}
            onClick={handleLike}
          />
        </div>
        <div className="writeComment">
          <input
            className="writeCommentInput"
            aria-label="Ajouter un commentaire"
            tabIndex="0"
            placeholder="Ajouter un commentaire..."
            onChange={(e) => setCommentContent(e.target.value)}
          ></input>
          <button
            className="commentButton"
            aria-label="envoyer le commentaire"
            onClick={sendComment}
          >
            Envoyer
          </button>
        </div>
      </div>
      {showComments && <CommentsContainer post={post} />}
    </div>
  );
};

export default Post;
