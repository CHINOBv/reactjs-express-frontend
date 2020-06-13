import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';

const Api = process.env.REACT_APP_API_HOST;

const Image = (props) => {
  let Id;
  try{
     Id = props.match.params.id;
  }catch(e){console.log(e)}

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("")

  const getImage = async() => {
    const res = await axios(`${Api}/images/${Id}`);
    console.log(res)
    setTitle(res.data.image.title);
    setDescription(res.data.image.description);
    setImg(Api+res.data.image.directory);
    setName(res.data.image.filename);
  }

  useEffect(() => {
    getImage()
    // eslint-disable-next-line
  }, []);

  const deleteImage = async() => {
    const res = await axios.delete(`${Api}/images/${Id}/delete`,{
      data:{
        directory: img,
        filename: name
      }
    });
    console.log(res)
  }
  return (
    <div className="card">
      <div 
      className="card-header d-flex justify-content-between align-items-center"
      >
        <h2>{title}</h2>
        <button className="btn btn-danger" data-id={Id} 
          onClick={() => deleteImage()}
        >
          <i className="fa fa-times"></i> Delete</button>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <div className="text-center">
          <img src={img} alt={title} className="img-fluid"/>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">

      </div>
    </div>
  );
};

export default withRouter(Image);
