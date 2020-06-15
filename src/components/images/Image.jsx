import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';

const Image = ({
  match: {
    params: { id },
  },
  history: { push },
}) => {

  useEffect(() => {
    
  }, []);
  return (
    <div className="card">
      <div 
      className="card-header d-flex justify-content-between align-items-center"
      >
        <h2>Image</h2>
      </div>
    </div>
  );
};

export default withRouter(Image);
