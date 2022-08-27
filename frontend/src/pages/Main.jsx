import axios from "axios";
import { useEffect } from "react";
import PostsContainer from "../components/PostsContainer";

const Main = () => {
    //STATE

    //COMPORTEMENT
  useEffect(() => {
    axios.get("http://localhost:3000/api/posts/getAll", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJ1c2VybmFtZSI6eyJpZCI6MTAsImxhc3RuYW1lIjoiR2lyYXJkaW4iLCJmaXJzdG5hbWUiOiJTZXZlcmluZSIsIndvcmtzdGF0aW9uIjoiYXNzaXN0YW50ZSIsInBhc3N3b3JkIjoiJDJiJDEwJFdDOFJKQTVkd0tpZk9SUU5QOU9LcnVMQkoyb0YvV3hnTHl2bVFkN29nUzMuQ1B2L01SLy8uIiwiYXZhdGFyIjpudWxsLCJlbWFpbCI6InRlc3RAbWFpbC5mciIsImhhc3JpZ2h0IjowfSwicGVybSI6MCwiaWF0IjoxNjYxNDEzODEyLCJleHAiOjE2NjE0NTcwMTJ9.-cc1GlvMmxsFwx7wa_omBIwJ5NnxYIt-brz8G0MrhVg",
      },
    });
    
    //RENDER
    return(
        < PostsContainer />
    );
  });
};
export default Main;
