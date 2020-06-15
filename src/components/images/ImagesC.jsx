import React, { useState, useEffect } from "react";
import axios from 'axios';

import ImageC from './ImageC.jsx';

const ImagesC = ({images}) => {

  return (
    <div className="card mt-2">
      <div className="card-header bg-dark text-white">
        <h3 className="text-white"> <i className="far fa-images"/> Recent Uploads</h3>
      </div>
      <div className="card-body">
        <div className="row">
          {images.map(image => (
            <ImageC 
              key={image._id}
              id={image._id}
              route={Api+image.directory} 
              fileName={image.filename}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesC;
