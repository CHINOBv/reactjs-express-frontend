import React, { useState } from "react";

import axios from "axios";

const Comment = ({ Api, Id }) => {
  const [showBtn, setShowBtn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const toggleBtn = () => {
    if (!showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${Api}/images/${Id}/comment`, {
      name,
      email,
      comment,
    });
    console.log(res);
  };

  return (
    <div className="card mt-2">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3>Comments</h3>
        <button
          className="btn btn-info"
          id="btn-toggle-comment"
          onClick={() => toggleBtn()}
        >
          <i className="fa fa-comment-o"></i> Post a Comment
        </button>
      </div>
      {showBtn ? (
        <div className="card-body">
          <blockquote>
            <form>
              <div className="form-group">
                <label htmlFor="Name" className="label">
                  Name:
                </label>
                <input
                  type="text"
                  id="Name"
                  placeholder="Enter you'r Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email: </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter you Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Comment">Comment: </label>
                <textarea
                  rows="2"
                  placeholder="Write you'r Comment"
                  className="form-control"
                  id="Comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-success btn-block"
                  onClick={(e) => postComment(e)}
                >
                  <i className="fa fa-comment"></i> Post
                </button>
              </div>
            </form>
          </blockquote>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
