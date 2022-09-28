import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";
import {useAuthContext} from "../hooks/useAuthContext"

const EditPost = ({ data, closeModale }) => {
  //STATE
  const [editContent, setEditContent] = useState(data.content);
  const [editImg, setEditImg] = useState("");
  const {user} = useAuthContext();
  //COMPORTEMENT

  

  const handleEditPost = (e) => {
    e.preventDefault();
    let postEdit = { editContent, editImg };
    postEdit = new FormData();
    postEdit.append("image", editImg[0]);
    postEdit.append("content", editContent);
    if(editImg[0] == undefined && editContent == ""){
      toast.error("Veuillez supprimer votre message, n'envoyez pas de poste vide!")
    }else{
    axios
      .put(`${process.env.REACT_APP_API_URL}api/posts/${data.id}`, postEdit, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        toast.success("publication modifiée!");
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Une erreur s'est produite");
      });
    }
  };
  
  const handleDeleteImg = (e) => {

    let body = {
      content: editContent,
    };
    if(editContent !== ""){
    axios
      .put(`${process.env.REACT_APP_API_URL}api/posts/deletepic/${data.id}`, body, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        toast.success("Image supprimée!")
        
      })
      .catch((err) => {
        toast.error("Il n'y a aucune image à supprimer")
        
      });
    }else{
      alert('Votre poste ne peut pas être vide, veuillez le supprimer intégralement')
    }
  };

  //RENDER

  return createPortal(
    <div className="modale-editPostContainer">
      <div className="contentModale">
        <FontAwesomeIcon
          icon={faXmark}
          className="closeIcon"
          tabIndex="0"
          onClick={() => closeModale(false)}
          aria-label="fermer l'éditeur"
        />
        <div className="titleEdit">
          <h2 tabIndex="0">Quoi de neuf {user.firstname}? 😃</h2>
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
            aria-label="modification du contenu"
            placeholder={` Quelque chose à ajouter? `}
            onChange={(e) => setEditContent(e.target.value)}
            value={editContent}
          ></input>
          <div className="editPostOptions">
            <span>
              <input
                type="file"
                id="editImg"
                aria-label="changer l'image"
                className="editImg"
                onChange={(e) => setEditImg(e.target.files)}
              ></input>
              <label htmlFor="editImg">
                <FontAwesomeIcon icon={faImage} tabIndex="0" aria-label="Modifier l'image" className="editPostIcon" />
              </label>
            </span>
            <button className="deleteImgBtn" aria-label="supprimer l'image"onClick={(e) => handleDeleteImg()}>
              Supprimer l'image
            </button>
            <input type="submit" value="Postez" className="postBtn" aria-label="envoyer"></input>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EditPost;
