// import { useState } from "react";


const Comment = ({ comment }) => {
  //== props.comment
  //STATE

  //COMPORTEMENT

  //RENDER
  return (
    <div className="comment">
      <div className="commentHeader">
        <div className="commentUser">
          <p>
            {comment.firstname} {comment.lastname}
          </p>
        </div>
      </div>
      <div className="commentContent">
        <p>{comment.commentcontent}</p>
      </div>
    </div>
  );
};

export default Comment;
