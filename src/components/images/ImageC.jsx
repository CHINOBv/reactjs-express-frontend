import React from 'react';
import { Link } from 'react-router-dom'

const ImageC = ({route, fileName, description, id}) => {
  return (
    <div className="col-md-4">
      <Link to={`/image/${id}`}>
        <img src={route} alt={fileName} className="w-100 h-100 img-thumbnail"/>
      </Link>
    </div>
  )
}

export default ImageC
