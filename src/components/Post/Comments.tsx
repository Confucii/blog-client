import { CommentInterface } from "../../interfaces";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./styles/Comments.css";
import React from "react";

function Comments({
  postid,
  comments,
}: {
  postid: string;
  comments: CommentInterface[];
}) {
  return (
    <div className="Comments">
      <CommentForm postid={postid} />
      <h2 className="comments-header">Comments</h2>
      <div className="comments-container">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })
        ) : (
          <div className="error-message">
            There is nothing here yet, be the first one to comment!{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
