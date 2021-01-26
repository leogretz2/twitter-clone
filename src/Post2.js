import React from 'react'
import "./Post2.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserRounded"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post2() {
    return (
        <div className="post2">
            <div className="post2__avatar">
                <Avatar src="https://pixy.org/src/477/4773331.png"/>
            </div>
            <div className="post2__body">
                <div className="post2__header">
                    <div className="post2__headerText">
                        <h3>
                            Leo Gretzinger <span>
                                <VerifiedUserIcon className="post2__badge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post2__headerDescription">
                        <p>sukit</p>
                    </div>
                    <img src="https://pixy.org/src/477/4773331.png" alt=""/>
                    <div className="post2__footer">
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

export default Post2
