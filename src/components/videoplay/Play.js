import React from "react"
import "./Play.css"
import Video from "./Video"
import Comment from "./Comment"
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
          <VideoDescription
            title="RTX 3090 8K Gaming - FIRST in the WORLD"
            views="812,366"
            timestamp="Sep 23, 2020"
            likes="81K"
            dislikes="1.3K"
            channelName="Linus Tech Tips"
            verified={true}
            subscribers="11.9M"
            videoDescription="Thanks to Nvidia for sponsoring this video and sending over this incredible experience. Learn more about Nvidia 8K at https://www.nvidia.com/en-us/geforce/..."
          />
          Comments
          <Comment
            commenter="Tasnimul Hasan Tauhid"
            timestamp="02 May, 2020"
            comment="Really Nice"
            likes="12"
            dislikes="2"
          />
          <Comment
            commenter="Tasnimul Hasan Tauhid"
            timestamp="02 May, 2020"
            comment="Really Nice"
            likes="12"
            dislikes="2"
          />
          <Comment
            commenter="Tasnimul Hasan Tauhid"
            timestamp="02 May, 2020"
            comment="Really Nice"
            likes="12"
            dislikes="2"
          />
          <hr />
        </div>
        <div className="play__recommendations">Recommendations</div>
      </div>
    </div>
  )
}

export default Play
