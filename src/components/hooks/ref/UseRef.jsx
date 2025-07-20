import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'

const UseRef = () => {

  const timer = useRef(null);

  const [stopWatch, setStop] = useState(0);

    const start = ()=> {
      timer.current = setInterval(() => {
        setStop(item => item +1)
      }, 1000);
    }
    function stop(){
      clearInterval(timer.current);
      timer.current === null
    }

    function reset(){
      setStop(0);
    }


  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold">{stopWatch}</h1>
      <div className="mt-4 space-x-2">
        <button onClick={start} className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer">Start</button>
        <button onClick={stop} className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer">Stop</button>
        <button onClick={reset} className="bg-gray-500 text-white px-4 py-2 rounded hover:cursor-pointer">Reset</button>
      </div>
    </div>
  )
}

export default UseRef