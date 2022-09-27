import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import { useAuthContext } from "../hooks/useAuthContext";


const CommentsContainer = ({ post, setPostList, isAdmin, idUser }) => {
  //STATE
  const [commentList, setCommentList] = useState([]);
  const {user} = useAuthContext();
  //COMPORTEMENT
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(
        `${process.env.REACT_APP_API_URL}api/posts/${post.id}/comments/getAll`,
        config
      )
      .then((res) => {
        setCommentList(res.data);
      });
  }, [post]); //? 

  //RENDER
  return (
    <div className="commentsWrapper">
      {commentList.length > 0 &&
        commentList.map((comment) => (
          <Comment post={post} comment={comment} key={comment.id} setPostList={setPostList} isAdmin={user.hasright} idUser={user.id}/>
        ))}
    </div>
  );
};

export default CommentsContainer;
