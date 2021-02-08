import React, { forwardRef } from 'react'
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                            {/* one liner if statement guy here - cmp is always true so if verified true, 
                            it renders the verified symbol */}
                            {verified && <VerifiedUserIcon className="post__badge" />} @{username}
                            </span> 
                        </h3> 
                    </div>
                    <div className="post__headerDescription">
                        {/* <p>I'm making a Twitter Clone *thumbs up*!</p> */}
                        <p>{text}</p>
                    </div>
                    {/* <img src="https://media.giphy.com/media/xT1R9EbolF7trQnIyI/giphy.gif" alt=""/> */}
                    <img src={image} alt=""/>
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
})

export default Post;
