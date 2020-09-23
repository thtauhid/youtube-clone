import React from "react"
import "./Play.css"
import Video from "./Video"
import Comments from "./Comments"

function Play() {
  return (
    <div className="play">
      <div className="play__video">
        <Video />
      </div>
      <hr />
      <div className="play__others">
        <div className="play__comments">
          <Comments />
        </div>
        <div className="play__recommendations">Recommendations</div>
      </div>
    </div>
  )
}

export default Play
