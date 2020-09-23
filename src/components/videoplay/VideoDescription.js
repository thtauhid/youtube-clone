import React from "react"
import "./VideoDescription.css"

import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ShareIcon from "@material-ui/icons/Share"
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

function VideoDescription({
  title,
  views,
  timestamp,
  likes,
  dislikes,
  channelName,
  verified,
  subscribers,
  videoDescription,
}) {
  return (
    <div className="videoDescription">
      <h2>{title}</h2>
      <div className="videoDescription__details">
        <p className="videoDescription__detailsViewsnTime">
          {views} views • {timestamp}
        </p>
        {/* <span class="my-spacer"></span> */}
        <div className="videoDescription__details_extras">
          <p className="videoDescription__details_extrasItem">
            <ThumbUpIcon className="videoDescription__details_extrasItemIcon" />
            {likes}
          </p>
          <p className="videoDescription__details_extrasItem">
            <ThumbDownIcon className="videoDescription__details_extrasItemIcon" />
            {dislikes}
          </p>
          <p className="videoDescription__details_extrasItem">
            <ShareIcon className="videoDescription__details_extrasItemIcon" />
            SHARE
          </p>
          <p className="videoDescription__details_extrasItem">
            <PlaylistAddIcon className="videoDescription__details_extrasItemIcon" />
            SAVE
          </p>
          <p className="videoDescription__details_extrasItem">
            <MoreHorizIcon className="videoDescription__details_extrasItemIcon" />
          </p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default VideoDescription
