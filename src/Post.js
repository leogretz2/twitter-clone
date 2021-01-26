import React from 'react'
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pixy.org/src/477/4773331.png"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Leo Gretzinger{" "}
                            <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" /> @leogretz2
                            </span> 
                        </h3> 
                    </div>
                    <div className="post__headerDescription">
                        <p>I'm making a Twitter Clone *thumbs up*!</p>
                    </div>
                    <img src="https://media.giphy.com/media/xT1R9EbolF7trQnIyI/giphy.gif" alt=""/>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeatIcon fontSize="small"/>
                        <FavoriteBorderIcon fontSize="small"/>
                        <PublishIcon fontSize="small"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
