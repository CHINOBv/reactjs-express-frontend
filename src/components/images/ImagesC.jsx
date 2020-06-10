import React, { useState, useEffect } from "react";
import axios from 'axios';

const Api = process.env.REACT_APP_API_HOST;

const ImagesC = () => {

  const [images, setImages] = useState([]);

  const getIMG = async () => {
    const res = await axios(`${Api}/images`);
    console.log(res);
    setImages(res.data.images);
  };
  useEffect(() => {
    getIMG();
  }, []);

  return (
    <>
      {images.map(image => (
        <img src={image.directory} alt={image.filename} key={image._id}/>
      ))}
    </>
  );
};

export default ImagesC;
