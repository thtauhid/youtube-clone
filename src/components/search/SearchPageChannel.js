import React from "react"
import "./SearchPageChannel.css"

function SearchPageChannel({
  channelName,
  verified,
  subscribers,
  videos,
  description,
  subscribed,
  channelImage,
}) {
  return (
    <div className="searchPageChannel">
      <div className="searchPageChannel__channelImage">
        <img src={channelImage} />
      </div>
      <div className="searchPageChannel__channelDetails">
        <h2>{channelName}</h2>
        <p>
          {subscribers} • {videos}
        </p>
        <p>{description}</p>
      </div>
      <div className="searchPageChannel__subscribeButton">
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default SearchPageChannel
