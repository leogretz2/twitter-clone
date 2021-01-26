import React from 'react';
import TweetBox from './TweetBox';
import Post from "./Post";
import Post2 from "./Post2";
import "./Feed.css";

function Feed() {
    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed__header">
                <h2> Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox />
            {/* Posts */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            {/* <Post2 /> */}
            
            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
            {/* Posts */}
        </div>
    )
}

export default Feed
