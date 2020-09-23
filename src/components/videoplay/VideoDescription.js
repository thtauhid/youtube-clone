import React from "react"
import "./VideoDescription.css"

import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ShareIcon from "@material-ui/icons/Share"
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

function VideoDescription() {
  return (
    <div className="videoDescription">
      <h2>
        Coldplay - Hymn For The Weekend - Alan Walker Remix | Sam Kolder -
        (Unofficial Video)
      </h2>
      <div className="videoDescription__details">
        <p className="videoDescription__detailsViewsnTime">
          42,953,056 views • Mar 21, 2019
        </p>
        {/* <span class="my-spacer"></span> */}
        <div className="videoDescription__details_extras">
          <p className="videoDescription__details_extrasItem">
            <ThumbUpIcon className="videoDescription__details_extrasItemIcon" />{" "}
            27M
          </p>
          <p className="videoDescription__details_extrasItem">
            <ThumbDownIcon className="videoDescription__details_extrasItemIcon" />{" "}
            56M
          </p>
          <p className="videoDescription__details_extrasItem">
            <ShareIcon className="videoDescription__details_extrasItemIcon" />{" "}
            SHARE
          </p>
          <p className="videoDescription__details_extrasItem">
            <PlaylistAddIcon className="videoDescription__details_extrasItemIcon" />{" "}
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
