import { useNavigate } from "react-router-dom";
import "./styles/CommentForm.css";
import React, { useState } from "react";

function CommentForm({ postid }: { postid: string }) {
  const [form, setForm] = useState({
    author: "",
    text: "",
    post: postid,
  });
  const [messages, setMessages] = useState({ text: "", success: "" });

  const navigator = useNavigate();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setMessages({ text: "", success: "" });
    try {
      const res = await fetch(
        "https://blog-api-production-17b7.up.railway.app/comments",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(form),
        }
      );

      const resJson = await res.json();

      if (res.status === 200) {
        setForm({
          author: "",
          text: "",
          post: postid,
        });
        setMessages({ text: "", success: resJson.message });
        navigator(".", { replace: true });
      } else {
        let errorMessages;
        resJson.forEach((error) => {
          errorMessages = { ...errorMessages, [error.path]: error.msg };
        });

        setMessages({ ...messages, ...errorMessages });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <h2>Write a comment!</h2>
        <div className="form-input">
          <label htmlFor="author">{"Author (optional)"}</label>
          <input
            type="text"
            name="author"
            id="author"
            value={form.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="text">Message</label>
          <textarea
            className="comment-form-textarea"
            name="text"
            id="text"
            value={form.text}
            onChange={handleChange}
            rows={5}
          />
          {messages?.text.length > 0 && (
            <span style={{ color: "red" }}>{messages.text}</span>
          )}
          {messages?.success.length > 0 && (
            <span style={{ color: "green" }}>{messages.success}</span>
          )}
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
