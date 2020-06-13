import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { timeAgo } from "../../helpers/helpers.js";

import Comment from "./Comment.jsx";

import axios from "axios";
const Api = process.env.REACT_APP_API_HOST;

const Image = (props) => {
  let Id;
  try {
    Id = props.match.params.id;
  } catch (e) {
    console.log(e);
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [createdat, setCreatedAt] = useState("");

  const getImage = async () => {
    const res = await axios(`${Api}/images/${Id}`);
    console.log(res);
    setTitle(res.data.image.title);
    setDescription(res.data.image.description);
    setImg(Api + res.data.image.directory);
    setName(res.data.image.filename);
    setLikes(res.data.image.likes);
    setViews(res.data.image.views);
    const time = timeAgo(res.data.image.timestamp);
    setCreatedAt(time);
  };
  //console.log(createdat)

  useEffect(() => {
    getImage();
    // eslint-disable-next-line
  }, []);

  const deleteImage = async () => {
    const res = await axios.delete(`${Api}/images/${Id}/delete`, {
      data: {
        directory: img,
        filename: name,
      },
    });
    console.log(res);
  };
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <button
            className="btn btn-danger"
            data-id={Id}
            onClick={() => deleteImage()}
          >
            <i className="fa fa-times"></i> Delete
          </button>
        </div>
        <div className="card-body">
          <p>{description}</p>
          <div className="text-center">
            <img src={img} alt={title} className="img-fluid" />
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <button className="btn btn-success">
            <i className="fas fa-thumbs-up"></i> Like
          </button>
          <p>
            <span className="likes-count">{likes}</span>
            <i className="fas fa-heart"></i>
          </p>
          <p>
            <i className="fas fa-eye"></i> {views}
          </p>
          <p>
            <i className="far fa-clock"></i>
            {createdat}
          </p>
        </div>
      </div>
      <Comment Api={Api} Id={Id} />
    </>
  );
};

export default withRouter(Image);
