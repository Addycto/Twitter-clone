import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'

import "./TweetBox.css"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] =  useState('')

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Aayush Dua",
            username: "Addycto",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        })

        setTweetImage("")
        setTweetMessage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"></Avatar>
                    <input 
                        onChange={e=>setTweetMessage(e.target.value)} 
                        value={tweetMessage} 
                        placeholder="What's happening?"></input>
                </div>
                <input className="tweetBox__imageInput" onChange={e => setTweetImage(e.target.value)} value={tweetImage} type="text" placeholder="Optional: Enter Image URL"></input>
                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
