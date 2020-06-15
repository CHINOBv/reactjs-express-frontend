import React from 'react'

const Image = ({match}) => {
  console.log(match.params);
  return (
    <div className="card">
      <div 
        className="card-header d-flex justify-content-between align-items-center"
      >
        <h2></h2>
      </div>
    </div>
  )
}

export default Image
