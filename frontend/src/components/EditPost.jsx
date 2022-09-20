import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";

const EditPost = ({ data, setDisplayModale }) => {
  //STATE
  const [editContent, setEditContent] = useState("");
  const [editPostImg, setEditPostImg] = useState("");

  //COMPORTEMENT
  
  const token = localStorage.getItem("token");
  const handleEditPost = (e) => {
    e.preventDefault();
    let postEdit = { content:"fdzf", postimg:"fbezuifbz" };
    console.log(postEdit);
    // if (postimg.length !== 0) {
    postEdit = new FormData();
    //   postCreate.append("image", postimg[0]);
    postEdit.append("content", JSON.stringify(editContent));
    axios.put(`${process.env.REACT_APP_API_URL}api/posts/${data.id}`, postEdit, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  //RENDER

  return createPortal(
    <div className="modale-editPostContainer">
      <div className="contentModale">
      <FontAwesomeIcon icon={faXmark} className="closeIcon" /*onClick={() => setDisplayModale(false)}*/ />
        <div className="titleEdit">
          <h2>Quoi de neuf? 😃</h2>
        </div>
        <label htmlFor="editPost"></label>
        <form
          action=""
          className="editWriteNews"
          onSubmit={handleEditPost}
          id="editPostForm"
        >
          <input
            name="editPost"
            id="editPost"
            className="editPostInput"
            type="textarea"
            placeholder={` Quelque chose à ajouter? `}
            onChange={(e) => setEditContent(e.target.value)}
            value={editContent}
          ></input>
          <div className="editPostOptions">
            <FontAwesomeIcon icon={faImage} className="editPostIcon" />
            <input
              //   onClick={handleCreatePost}
              type="submit"
              value="Postez!"
              className="postBtn"
            ></input>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EditPost;
