import React, { use } from 'react'
import { useParams } from 'react-router'

import UseState from './hooks/state/UseState';
import UseEffect from './hooks/effect/UseEffect';
import UseReducer from './hooks/reducer/UseReducer';
import CustomHook from './hooks/customHook/CustomHook';

const SingleProject = () => {
  const {name} = useParams();
  console.log(name)

  switch(name){
    case 'useState':
      return <UseState/>
    
    case 'useEffect':
      return <UseEffect />
    
    case 'useReducer':
      return <UseReducer />

    case 'useFetch':
      return <CustomHook />
  }
}

export default SingleProject