import React, {useEffect, useState } from 'react'
import WindowImg from '../../../assets/Window-Size.png'
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const UseEffect = () => {

  const [size, setSize] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  function getWindowSize(){
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", getWindowSize)

    return () => {
      window.removeEventListener("resize", getWindowSize)
    }
  },[size]);



  const handleAdd =()=>{
    setCount(item => item+1)
  }
  console.log(count)

  useEffect(() => {
    document.title = count === 0 ? "No New messages! ":`${count} new messages<3`
    toast(document.title)
  }, [count]);



  return (
    <div className='p-15'>
      <div className="grid md:flex gap-5 items-center font-semibold lg:text-xl">
        <p><span className=' text-3xl sm:text-5xl md:text-6xl text-indigo-400 font-bold'>useffect </span>hook is used to handle actions that fall out of the window.</p>
        <p>No dependency array:- The useEffect function will run on every parent compo render.(By Default)</p>
        <p>Dependency array:- The useEffect function will run only when the variable in dependency array updates.[count]</p>
        <p>Empty dependency array:- The component renders only once. ( [ ] )</p>
      </div>

      <div className='mt-10 font-extrabold text-amber-200'>
        <p>Increase or decrease the screen size of your browser.</p>
      </div>


      <div className="mt-10 relative inline-block">
        <img src={WindowImg} alt="Window" className="w-full h-auto" />
        <p className="absolute inset-0 flex items-center justify-center text-white text-md sm:text-5xl md:text-6xl font-bold">
          {size}px
        </p>
      </div>

      <div className="mt-10">
        <p>Click here for a little pop-up. <span><Button className='bg-blue-600 hover:bg-blue-300 hover:text-black hover:cursor-pointer' onClick={handleAdd}>Click Me!</Button></span></p>
      </div>

    </div>
  )
}

export default UseEffect