// import { useState } from "react";

const Comment = ({ comment }) => {  //== comment.post
    //STATE
    
    //COMPORTEMENT
    //RENDER
    return(
        <div className="comment">
            <div className="commentHeader">
                <div className="commentUser">
                    <p>firstname / lastname</p>
                </div>
                <div className="commentContent">
                    <p>commentcontent</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;