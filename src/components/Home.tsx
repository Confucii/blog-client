import "./styles/Home.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { PostPreviewInterface } from "../interfaces";
import PostPreview from "./PostPreview";

function Home() {
  const allPosts = useLoaderData() as PostPreviewInterface[];

  return (
    <div className="Home">
      <div className="hero-text">
        <h3>welcome to my blog</h3>{" "}
        <h3>it is not empty, it is minimalistic {":)"}</h3>
      </div>
      <div className="posts-container">
        {allPosts.map((post) => {
          return <PostPreview key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Home;
