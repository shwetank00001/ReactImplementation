import React, { use } from 'react'
import { useParams } from 'react-router'

import UseState from './hooks/state/UseState';
import UseEffect from './hooks/effect/UseEffect';
import UseReducer from './hooks/reducer/UseReducer';
import CustomHook from './hooks/customHook/CustomHook';
import ContextHook from './hooks/contextAPI/ContextHook';

//auth routes for login and signup
import Login from './hooks/contextAPI/Login';
import SignUp from './hooks/contextAPI/SignUp';
import AdminPage from './hooks/contextAPI/AdminPage';

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

    case 'useContext':
      return <ContextHook />

    case 'login':
      return <Login />

    case 'signup':
      return <SignUp />

    case 'admin':
      return <AdminPage />
  }
}

export default SingleProject