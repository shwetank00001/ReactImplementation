import React, { use } from 'react'
import { useParams } from 'react-router'

const SingleProject = () => {
  const {name} = useParams();
  return (
    <div>
      <p>This is for {name}</p>
    </div>
  )
}

export default SingleProject