import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../hooks/useAuthContext";

const EditComment = ({ post, comment, closeModale }) => {
  //STATE
  const [editContent, setEditContent] = useState(comment.commentcontent);
  const { user } = useAuthContext();
  //COMPORTEMENT
  const handleEditComment = (e) => {
    e.preventDefault();

    let body = {
      commentcontent: editContent,
    };
    if (editContent === "") {
      return toast.error("Vous ne pouvez pas envoyer de contenu vide");
    } else {
      axios
        .put(
          `${process.env.REACT_APP_API_URL}api/posts/${post.id}/comments/${comment.id}`,
          body,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        )
        .then((res) => {
          toast.success("commentaire modifié!");
          window.location.reload();
        })
        .catch((err) => {
          toast.error("Une erreur s'est produite");
        });
    }
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
          <h2 tabIndex="0">Quoi de neuf{user.firstname} ? 😃</h2>
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
            <input
              type="submit"
              value="Postez"
              aria-label="Envoyer"
              className="postBtn"
            ></input>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EditComment;
