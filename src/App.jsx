import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const getIMG = async() => {
    const res = await axios.post("http://localhost:5000/images",{
      data:{
        name: "one name",
        othername: "second Name"
      }
    });
    console.log(res);
  }
  useEffect(() => {
    getIMG();
  }, [])

  return (
    <div>
      <h1>IMG Share</h1>
    </div>
  )
}

export default App
