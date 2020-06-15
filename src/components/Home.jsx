import React from "react";

import UploadImage from "./UploadImage.jsx";
import ImagesC from "./images/ImagesC.jsx";

const Home = ({images}) => {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-8">
          <UploadImage images={images}/>
        </div>
        <div className="col-md-4"></div>
      </div>
      <ImagesC />
    </div>
  );
};

export default Home;
