import React from "react"
import "./Play.css"
import Video from "./Video"
import Comments from "./Comments"
import VideoDescription from "./VideoDescription"

function Play() {
  return (
    <div className="play">
      <div className="play__video">
        <Video />
      </div>
      <hr />
      <div className="play__details">
        <div className="play__detailsMain">
          <VideoDescription />
          Comments
          <Comments />
          <hr />
        </div>
        <div className="play__recommendations">Recommendations</div>
      </div>
    </div>
  )
}

export default Play
