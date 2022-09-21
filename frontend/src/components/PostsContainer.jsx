import {useState, useEffect } from "react";
// import { UserContext } from '../utils/Context'
import axios from "axios";
import Post from "./Post";

const PostsContainer = () => {
  //STATES
  const [postList, setPostList] = useState([]);

 
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
        setPostList(res.data);

      });
  }, []); 

  //RENDER
  return (
    <div className="bigContainer">
      <div className="mainWrapper">
        {postList.length > 0 &&
          postList
            .sort((a, b) => (a.postdate > b.postdate ? -1 : 1))
            .map((post) => (
               <Post post={post} key={post.id} className="index" />
            ))}
      </div>
    </div>
  );
};

export default PostsContainer;
