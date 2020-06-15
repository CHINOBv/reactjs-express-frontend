import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Nav from "./components/Nav.jsx";
import Home from './components/Home.jsx';
import Image from './components/images/Image.jsx';


const App = () => {
  const api = process.env.REACT_APP_API_HOST;

  const [images, setImages] = useState([]);

  const getIMG = async () => {
    const res = await axios(`${api}/images`);
    //console.log(res);
    setImages(res.data.images);
  };
  useEffect(() => {
    getIMG();
  }, []);

  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" render={ () => <Home images={images}/> }/>
          <Route path="/image/:id" render={ () => <Image/> }/>
        </Switch>
      </Router>
    </>
  );
};
      

export default App;
