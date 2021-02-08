import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import db from './firebase';

/* -avatar takes a src image url (with https:)
    - can be png, img?
   -input is a place to type and placeholder
   is what appears in grayed out letters when 
   nothing's been typed
   -form navigates to a new page when form submitted
*/

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        // stops refresh, don't want that in react
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Leo Gretzinger',
            username: 'leogretz2',
            verified: true, 
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pixy.org/src/477/4773331.png"
        })
        setTweetMessage('')
        setTweetImage('')
    }

    return (
        <div className="tweetBox">
            {/* form refreshes page - don't want that */}
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pixy.org/src/477/4773331.png"/>
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    value={tweetImage}
                    placeholder="Optional: Enter image URL"
                    type="text"    
                />
                <Button
                    // type is sumbit because it's in a form
                    type="submit"
                    onClick={sendTweet}
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
