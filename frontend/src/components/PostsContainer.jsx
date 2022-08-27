import { useState, useEffect } from "react";
import axios from "axios";

const PostsContainer = () => {
  //STATES
  // const [postList, setPostList] = useState([]);
  //COMPORTEMENT

  useEffect(() => {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJ1c2VybmFtZSI6eyJpZCI6MTAsImxhc3RuYW1lIjoiR2lyYXJkaW4iLCJmaXJzdG5hbWUiOiJTZXZlcmluZSIsIndvcmtzdGF0aW9uIjoiYXNzaXN0YW50ZSIsInBhc3N3b3JkIjoiJDJiJDEwJFdDOFJKQTVkd0tpZk9SUU5QOU9LcnVMQkoyb0YvV3hnTHl2bVFkN29nUzMuQ1B2L01SLy8uIiwiYXZhdGFyIjpudWxsLCJlbWFpbCI6InRlc3RAbWFpbC5mciIsImhhc3JpZ2h0IjowfSwicGVybSI6MCwiaWF0IjoxNjYxNjAxOTg1LCJleHAiOjE2NjE2NDUxODV9.4SsLXMHme6J6Xv3ZOmZHCqJuQSulErGxzCd5RHH5pKg",
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}api/posts/getAll`, config)
      .then((res) => console.log(res.data));
  }, []);
  //RENDER
  return (
    <div className="postContainer">
      <h1>Les Posts ici</h1>
    </div>
  );
};

export default PostsContainer;
