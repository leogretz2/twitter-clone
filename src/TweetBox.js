import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

/* -avatar takes a src image url (with https:)
    - can be png, img?
   -input is a place to type and placeholder
   is what appears in grayed out letters when 
   nothing's been typed
   -form navigates to a new page when form submitted
*/

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pixy.org/src/477/4773331.png"/>
                    <input placeholder="What's happening?"/>
                </div>
                <input
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
