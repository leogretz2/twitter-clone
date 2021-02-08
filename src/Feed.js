import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from "./Post";
//import Post2 from "./Post2";
import "./Feed.css";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed__header">
                <h2> Home</h2>
            </div>

            {/* Tweet Box */}
        
            <TweetBox />
            {/* Posts */}
            <FlipMove>
            {posts.map(post =>
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            )}
            {/* <Post 
                displayName="Leo Gretzinger"
                username="leogretz2"
                verified
                text="I'm making a Twitter Clone *thumbs up*!"
                image="https://media.giphy.com/media/3oz8xPjPPvOwrGjip2/giphy.gif"
                avatar="https://pixy.org/src/477/4773331.png"
            /> */}
            </FlipMove>
        {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
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
