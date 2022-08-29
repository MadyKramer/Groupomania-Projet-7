import { useState, useEffect } from "react";
import axios from "axios";

const PostsContainer = () => {
  //STATES
  // const [postList, setPostList] = useState([]);
  //COMPORTEMENT

  useEffect(() => {
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}api/posts/getAll`, config)
      .then((res) => {
        console.log(res.data)});
    
  })

  //RENDER
  return (
    <div className="postContainer">
      <h1>Les Posts ici</h1>
    </div>
  );
};

export default PostsContainer;
