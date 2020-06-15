import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from "./components/Nav.jsx";
import Home from './components/Home.jsx';
import Image from './components/images/Image.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" render={ () => <Home/> }/>
          <Route exact path="/image/:id" render={ () => <Image/> }/>
        </Switch>
      </Router>
    </>
  );
};
      

export default App;
