import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const EditComment = ({ post, comment, closeModale }) => {
  //STATE

  const token = localStorage.getItem("token");

  console.log(post.id, comment.id)

  const [editContent, setEditContent] = useState(comment.commentcontent);

  //COMPORTEMENT


  const handleEditComment = (e) => {
    console.log(editContent)
    e.preventDefault();
   
    let body = {
        commentcontent: editContent,
      };
       
    axios
      .put(
        `${process.env.REACT_APP_API_URL}api/posts/${post.id}/comments/${comment.id}`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        alert("commentaire modifiée!");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Une erreur s'est produite");
      });
  };

  //RENDER

  return createPortal(
    <div className="modale-editPostContainer">
      <div className="contentModale">
        <FontAwesomeIcon
          icon={faXmark}
          className="closeIcon"
          aria-label="fermer l'éditeur"
          tabIndex="0"
          onClick={() => closeModale(false)}
        />
        <div className="titleEdit">
          <h2 tabIndex="0">Quoi de neuf? 😃</h2>
        </div>
        <label htmlFor="editomment"></label>
        <form
          action=""
          className="editWriteNews"
          onSubmit={handleEditComment}
          id="editommentForm"
        >
          <input
            name="editComment"
            id="editComment"
            className="editCommentInput"
            aria-label="modifiez ici le contenu"
            type="textarea"
            placeholder={` Quelque chose à ajouter? `}
            onChange={(e) => setEditContent(e.target.value)}
            value={editContent}
          ></input>
          <div className="editPostOptions">

            <input type="submit" value="Postez" aria-label="Envoyer" className="postBtn"></input>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EditComment;
