import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const ContextHook = () => {
  return (
    <div className='p-15'>
        <div className='flex flex-col gap-5'>
          <p className='text-xl sm:text-xl md:text-2xl   text-white'><span className='text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 '>ContextAPI</span> is used where we need to send data directly to a child instead of passing it through every component as prop. Due to this, the problem of <span className='underline italic font-semibold text-sky-600'>PropDrilling</span> arises and to counter, we use ContextAPI. </p>
          <p className="text-xl sm:text-xl md:text-2xl text-white">
            useContext gives us access to a Provider and a Consumer. To make a component a Provider, we use: 
            <code className="bg-gray-800 text-green-300 px-1 rounded">
              {`<globalContext.Provider value={{auth, setAuth}} ></globalContext.Provider>`}
            </code>
          </p>
          <p className='text-xl sm:text-xl md:text-2xl  text-white'>This is a project of contextAPI which a protected route, simulating a login flow using local storage and also to allow users with Admin rights (logged in user) to access some fake data. </p>
        </div>

        <div className='flex gap-5 mt-5'>
            <Button className="bg-pink-700 hover:bg-pink-400 hover:cursor-pointer"><Link to='/project/login'>Login</Link></Button>
            <Button className="bg-purple-700 hover:bg-purple-400 hover:cursor-pointer"><Link to='/project/signup'>Signup</Link></Button>
        </div>
    </div>
  )
}

export default ContextHook