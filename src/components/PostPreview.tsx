import React, { useEffect, useState } from "react";
import "./styles/PostPreview.css";
import { useNavigate } from "react-router-dom";
import { PostPreviewInterface } from "../interfaces";

function PostPreview({ post }: { post: PostPreviewInterface }) {
  const [colors, setColors] = useState<Number[]>([]);
  const [deg, setDeg] = useState<Number>();
  const navigate = useNavigate();

  useEffect(() => {
    const color = Math.floor(Math.random() * 256);
    const colorTwo = Math.floor(Math.random() * 256);
    const colorThree = Math.floor(Math.random() * 256);
    const deg = Math.floor(Math.random() * 361);
    setColors([color, colorTwo, colorThree]);
    setDeg(deg);
  }, []);

  function navigateToPost() {
    navigate(`/post/${post._id}`, {
      state: { deg, colors },
    });
  }

  return (
    <div className="PostPreview" onClick={navigateToPost}>
      <div
        className="color-holder"
        style={{
          background: `linear-gradient(${deg}deg, rgba(${colors[0]},${colors[1]},${colors[2]},1) 0%, rgba(${colors[1]},${colors[2]},${colors[0]},1) 100%)`,
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
