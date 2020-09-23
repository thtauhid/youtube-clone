import React from "react"
import "./VideoRow.css"

function VideoRow({
  videoTitle,
  channelName,
  views,
  timestamp,
  description,
  videoImage,
}) {
  return (
    <div className="videoRow">
      <div className="videoRow__video">
        <img src={videoImage} />
      </div>
      <div className="videoRow__details">
        <h3>{videoTitle}</h3>
        <p>
          {channelName} • {views} • {timestamp}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
