import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import { useEffect, useState } from "react";
import axios from 'axios';


const MainComponent = () => {
    const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
      setPosts([newPost, ...posts])
      console.log(newPost)
      postContent(newPost)
    }
  
    async function postContent(newPost) {
      await axios.post("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet", newPost)
  
    }
  
  
    useEffect(() => {
      fetchPost()
    }, [])
  
  
    async function fetchPost() {
      const response = await axios.get("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
      setPosts(response.data.tweets)
      console.log(response.data.tweets)
    }
    return (
        <div>
            <PostForm  create={createPost} />
                  <PostList 
                  posts={posts}/>
        </div>
    );
};

export default MainComponent;