import React, { useState } from "react";
import axios from "axios";

import Error from "./layout/Error.jsx";
import Alert from "./layout/Alert.jsx";

const UploadImage = () => {
  const Api = process.env.REACT_APP_API_HOST;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [response, setResponse] = useState({});
  console.log(file);

  const [error, setError] = useState({
    status: false,
    type: "",
    msg: "",
  });

  const Upload = async (e) => {
    e.preventDefault();

    /* const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      }); */
    setFile({});
    if (!title.trim() || !description.trim() || !file) {
      setError({
        status: true,
        type: "error",
        msg: "All fields are Required",
      });

      setFile("");
      setDescription("");
      setTitle("");
      return;
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", file);
      formData.append("description", description);

      const res = await axios(`${Api}/images`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      console.log(res);

      if (res.data.Error) {
        setError({
          status: true,
          type: "error",
          msg: "Only Images are Allowed",
        });
        setFile("");
        return;
      } else {
        setError({
          status: true,
          type: "Alert",
          msg: "Image Uploaded",
        });
      }
      setFile("");
      setDescription("");
      setTitle("");
      setTimeout(() => {
        setError({
          status: false,
          type: "",
          msg: "",
        });
      }, 5000);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header bg-dark">
          <h3 className="card-title text-white">
            <i className="far fa-image" /> Upload an Image
          </h3>
        </div>
        <div className="card-body">
          {error.status === true && error.type === "error" ? (
            <Error msg={error.msg} />
          ) : null}
          {error.status === true && error.type === "Alert" ? (
            <Alert msg={error.msg} />
          ) : null}
          <form onSubmit={(e) => Upload(e)}>
            <div className="form-group">
              <div className="custom-file">
                <input
                  type="file"
                  name="image"
                  className="custom-file-input"
                  id="inputGroupFile"
                  aria-describedby="inputGroupFileAddon"
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="inputGroupFile" className="custom-file-label">
                  Chose you'r File
                </label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title for the Image"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                rows={2}
                className="form-control"
                placeholder="Description for the Image"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" onClick={(e) => Upload(e)}>
                <i className="fa fa-upload" /> Upload Image
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
