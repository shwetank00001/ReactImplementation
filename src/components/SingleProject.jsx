import React, { use } from 'react'
import { useParams } from 'react-router'

import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';

const SingleProject = () => {
  const {name} = useParams();
  console.log(name)

  switch(name){
    case 'useState':
      return <UseState/>
    
    case 'useEffect':
      return <UseEffect />
  }
}

export default SingleProject