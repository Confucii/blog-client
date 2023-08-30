import React from "react";
import "./styles/PostPreview.css";
import { useNavigate } from "react-router-dom";
import { PostPreviewInterface } from "../interfaces";

function PostPreview({ post }: { post: PostPreviewInterface }) {
  const navigate = useNavigate();

  function navigateToPost() {
    navigate(`/post/${post._id}`);
  }

  return (
    <div className="PostPreview" onClick={navigateToPost}>
      <div
        className="color-holder"
        style={{
          background: `linear-gradient(${post.deg}deg, rgba(${post.colors[0]},${post.colors[1]},${post.colors[2]},1) 0%, rgba(${post.colors[1]},${post.colors[2]},${post.colors[0]},1) 100%)`,
        }}
      ></div>
      <div className="post-preview-data">
        <h2 className="post-preview-title">{post.title}</h2>
        <p className="post-preview-date">Posted: {post.date}</p>
      </div>
    </div>
  );
}

export default PostPreview;
