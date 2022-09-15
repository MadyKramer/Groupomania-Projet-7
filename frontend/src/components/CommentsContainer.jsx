import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";

const CommentsContainer = ({ post }) => {
  // == props.comment
  //STATE
  const [commentList, setCommentList] = useState([]);
  //COMPORTEMENT
  useEffect(() => {
    let token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
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
  }, [post]);

  //RENDER
  return (
    <div className="commentsWrapper">
      {commentList.length > 0 &&
        commentList.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
};

export default CommentsContainer;
