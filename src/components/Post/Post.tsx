import { useLoaderData, useLocation } from "react-router-dom";
import "./styles/Post.css";
import React, { useEffect } from "react";
import { PostWithComments } from "../../interfaces";

function Post() {
  const { post, comments } = useLoaderData() as PostWithComments;
  const location = useLocation().state;

  return (
    <div className="Post">
      <div className="post-container">
        <div
          className="post-color-holder"
          style={{
            background: `linear-gradient(${location.deg}deg, rgba(${location.colors[0]},${location.colors[1]},${location.colors[2]},1) 0%, rgba(${location.colors[1]},${location.colors[2]},${location.colors[0]},1) 100%)`,
          }}
        ></div>
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-date graytext">{post.date}</p>
          <p className="post-text">{post.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
