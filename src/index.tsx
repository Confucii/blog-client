import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Post from "./components/Post/Post";
import "./styles/index.css";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return fetch("http://localhost:3000/posts", {
            mode: "cors",
          });
        },
      },
      {
        path: "post/:postid",
        element: <Post />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/posts/${params.postid}`, {
            mode: "cors",
          });
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
