import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const ContextHook = () => {
  return (
    <div className='p-15'>
        <div>
            <p className='text-2xl text-white'>This page will simulate a login flow using local storage and also to allow users with Admin rights (logged in user) to access some fake data. </p>
            <div>
                <p>Select your theme</p>
            </div>

        </div>

        <div >
            <Button><Link to='/project/login'>Login</Link></Button>
            <Button><Link to='/project/signup'>Signup</Link></Button>
        </div>
    </div>
  )
}

export default ContextHook