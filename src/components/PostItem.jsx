import React from "react";
const PostItem = (props) =>{

return(
<div className="post">
    <div className="post__content">
      <strong>{props.nubmer}. </strong>
      <strong>{props.post.title}</strong>
      <div>
      {props.post.body}
      </div>
    </div>
    <div className="post__btns">
        <button>удалить</button>
    </div>

</div>

)

}
export default PostItem;