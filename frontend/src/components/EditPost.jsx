import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";

const EditPost = ({ data, closeModale }) => {
  //STATE
  const [editContent, setEditContent] = useState(data.content);
  const [editImg, setEditImg] = useState("");

  //COMPORTEMENT

  const token = localStorage.getItem("token");
  const handleEditPost = (e) => {
    e.preventDefault();
    let postEdit = { editContent, editImg };
    console.log(postEdit);
    // if (postimg.length !== 0) {
    postEdit = new FormData();
    
    postEdit.append("image", editImg[0]);
    postEdit.append("content", editContent);
    axios.put(
      `${process.env.REACT_APP_API_URL}api/posts/${data.id}`,
      postEdit,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };

  //RENDER

  return createPortal(
    <div className="modale-editPostContainer">
      <div className="contentModale">
        <FontAwesomeIcon
          icon={faXmark}
          className="closeIcon"
          onClick={() => closeModale(false)}
        />
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
            <span>
              <input
                type="file"
                id="editImg"
                className="editImg"
                onChange={(e) => setEditImg(e.target.files)}
              ></input>
              <label htmlFor="editImg">
                <FontAwesomeIcon icon={faImage} className="editPostIcon" />
              </label>
            </span>
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
