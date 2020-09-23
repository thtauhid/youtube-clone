import React from "react"
import "./Comment.css"
import Avatar from "@material-ui/core/Avatar"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
function Comment({ commenter, timestamp, comment, likes, dislikes }) {
  return (
    <div className="comment">
      <Avatar className="comment__image" />
      <div className="comment__meta">
        <div className="comment__lineOne">
          <div className="comment__lineOneCommenter">{commenter}</div>
          <div className="comment__lineOneTimestamp">{timestamp}</div>
        </div>
        <div className="comment__lineTwo">{comment}</div>
        <div className="comment__lineThree">
          <p className="comment__lineThreeItem">
            <ThumbUpIcon className="comment__lineThreeItemIcon" />
            {likes}
          </p>
          <p className="comment__lineThreeItem">
            <ThumbDownIcon className="comment__lineThreeItemIcon" />
            {likes}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
