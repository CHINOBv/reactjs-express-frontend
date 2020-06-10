import React from "react";

import Nav from "./components/Nav.jsx";
import UploadImage from "./components/UploadImage.jsx";
import ImagesC from "./components/images/ImagesC.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container p-4">
        <div className="row">
          <div className="col-md-8">
            <UploadImage />
          </div>
          <div className="col-md-4">
            <ImagesC />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
