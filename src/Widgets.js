import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed"
import { Search } from '@material-ui/icons'

import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1336349048534528001"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 400}} />
            </div>
        </div>
    )
}

export default Widgets
