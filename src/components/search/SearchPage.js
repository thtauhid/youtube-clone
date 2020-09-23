import React from "react"
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import SearchPageChannel from "./SearchPageChannel"
import VideoRow from "./VideoRow"

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <SearchPageChannel
        channelName="Linus Tech Tips"
        verified="true"
        subscribers="11.8M"
        videos="5,112 videos"
        description="Tech Can be complicated; we try to make it easy. Tech Can be complicated; we try to make it easy. Tech Can be complicated; we try to make it easy."
        subscribed="false"
        channelImage="https://yt3.ggpht.com/a/AATXAJwQoPNwqUbfu_y7o7GWaeZgX8ovoHSYuWfbiJLR8g=s176-c-k-c0x00ffffff-no-rj-mo"
      />
      <hr />
      <h2>Latest from Linus Tech Tips</h2>
      <VideoRow
        videoTitle="Android 11 is here and I like it."
        channelName="Linus Tech Tips"
        views="198,184 views"
        timestamp="Sep 22, 2020"
        description="Android 11 doesn't add a TON of new features, but there's still enough tweaks and optimizations to make diehard Android fans happy. Let's talk about 'em!"
        videoImage="https://i.ytimg.com/an_webp/XGsBPwRT9Z4/mqdefault_6s.webp?du=3000&sqp=CM76qPsF&rs=AOn4CLDKn-_Joiwrbolesf-gLkO11kOtnA"
      />
      <VideoRow
        videoTitle="Android 11 is here and I like it."
        channelName="Linus Tech Tips"
        views="198,184 views"
        timestamp="Sep 22, 2020"
        description="Android 11 doesn't add a TON of new features, but there's still enough tweaks and optimizations to make diehard Android fans happy. Let's talk about 'em!"
        videoImage="https://i.ytimg.com/an_webp/XGsBPwRT9Z4/mqdefault_6s.webp?du=3000&sqp=CM76qPsF&rs=AOn4CLDKn-_Joiwrbolesf-gLkO11kOtnA"
      />

      <VideoRow
        videoTitle="Android 11 is here and I like it."
        channelName="Linus Tech Tips"
        views="198,184 views"
        timestamp="Sep 22, 2020"
        description="Android 11 doesn't add a TON of new features, but there's still enough tweaks and optimizations to make diehard Android fans happy. Let's talk about 'em!"
        videoImage="https://i.ytimg.com/an_webp/XGsBPwRT9Z4/mqdefault_6s.webp?du=3000&sqp=CM76qPsF&rs=AOn4CLDKn-_Joiwrbolesf-gLkO11kOtnA"
      />

      <VideoRow
        videoTitle="Android 11 is here and I like it."
        channelName="Linus Tech Tips"
        views="198,184 views"
        timestamp="Sep 22, 2020"
        description="Android 11 doesn't add a TON of new features, but there's still enough tweaks and optimizations to make diehard Android fans happy. Let's talk about 'em!"
        videoImage="https://i.ytimg.com/an_webp/XGsBPwRT9Z4/mqdefault_6s.webp?du=3000&sqp=CM76qPsF&rs=AOn4CLDKn-_Joiwrbolesf-gLkO11kOtnA"
      />
    </div>
  )
}

export default SearchPage
