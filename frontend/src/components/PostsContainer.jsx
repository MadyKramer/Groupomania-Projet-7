import { useState, useEffect } from "react";
// import { UserContext } from '../utils/Context'
import UserComponent from "./UserComponent";
import axios from "axios";
import Post from "./Post";
import CreatePost from "./CreatePost";
import whitelogo from "./../assets/icon-left-font-monochrome-white.png"



const PostsContainer = () => {
  //STATES
  const [postList, setPostList] = useState([]);
  const [reload, setReload] = useState(true);

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
        setReload(false);
      });
  }, [setReload]);

  //RENDER
  return (
    <div>
      <div className="bigContainer">
        <UserComponent />
        <img src={whitelogo} alt="white logo" className="whiteLogo" />
        <div className="mainWrapper">
          <CreatePost setReload={setReload} reload={reload} />
          {postList.length > 0 &&
            postList
              .sort((a, b) => (a.postdate > b.postdate ? -1 : 1))
              .map((post, indexPost) => (
                <Post post={post} key={post.id} indexPost={indexPost} className="index" />
              
              ))}
        </div>
      </div>
    </div>
  );
};

export default PostsContainer;
