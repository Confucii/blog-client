import "./styles/Home.css";
import Header from "./Header/Header";
import React, { useEffect, useState } from "react";

function Home() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPostData() {
      const posts = await fetch("http://localhost:3000/posts", {
        mode: "cors",
      });
      const res = await posts.json();

      setAllPosts(res);
    }
    fetchPostData();
  }, []);

  console.log(allPosts);

  return (
    <div className="main">
      <Header />
    </div>
  );
}

export default Home;
