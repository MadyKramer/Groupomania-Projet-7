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
  const isAdmin = useContext(UserContext);
  console.log(isAdmin)

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
        window.location.reload()
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
            <FontAwesomeIcon icon={faPenToSquare} className="handlePost" onClick= {() => setDisplayModale(true)}/>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="handlePost"
              onClick={handleDeletePost}
            />
          </div>
           {imgUrl !== "http://localhost:4500/null" && <img src={imgUrl} alt="" />}
          <p>{post.content}</p>
          {displayModale && <EditPost data={post}  closeModale={setDisplayModale}/>  }
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
