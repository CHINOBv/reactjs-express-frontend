import React, { useState, useEffect } from "react";
import { timeAgo } from "../../helpers/helpers.js";
import { Link } from "react-router-dom";

import axios from "axios";

const Comment = ({ Api, Id }) => {
  const [showBtn, setShowBtn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const toggleBtn = () => {
    if (!showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const getComments = async () => {
    const res = await axios(`${Api}/images/${Id}`);
    //console.log(res);

    setComments(res.data.comments);
  };

  const postComment = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${Api}/images/${Id}/comment`, {
      name,
      email,
      comment,
    });
    //console.log(res);
    getComments();
  };


  useEffect(() => {
    getComments();
  }, []);


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
          <ul className="list-group p-4">
            {comments.map((comment) => {
              const time = timeAgo(comment.timestamp);
              return (
                <li className="list-group-item" key={comment._id}>
                  <div className="row">
                    <Link className="col text-center" to="#">
                      <img src={`http://gravatar.com/avatar/${comment.gravatar}?d=monsterid&s=45`} alt=""/>
                    </Link>
                    <blockquote className="col">
                      <p className="lead">{comment.comment}</p>
                      <footer className="blockquote-footer">
                        {comment.name} - {time}
                      </footer>
                    </blockquote>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
