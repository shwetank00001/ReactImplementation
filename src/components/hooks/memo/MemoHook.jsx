import React, { useEffect, useState } from 'react'
import Participants from './Participants'
import { Button } from '@/components/ui/button';


const MemoHook = () => {

  const [count,setCount] = useState(0);
  function add(){
    setCount(i => i+1)
  }

  useEffect(() => {
    console.log("Increase the count and then select the filter button")
  }, [])

  return (
    <div className='p-15'>
      <div>
        <p className='text-3xl text-white font-semibold'>List of every participant with their respective levels and scores.</p>
        <p className='text-3xl text-white'>(This data was generated using <span className='text-5xl text-pink-700 font-bold'>faker JS</span>)</p>
        <p>Let me show you how React.Memo works.</p>
        <p>Here are my two components: Count(Component 1) and a Card(Component 2).</p>

        <p className='text-purple-400 mt-5 mb-5 font-semibold'>React says that if a child component updates/re-renders, the parent also re-renders. The parent has Component 1 and Component 2. This means if Component 1 re-renders then the parent also re renders. Since Component 2 is the child of Parent, Component 2 also re-renders. Since, here I have a list of 1000 users, so every time our count changes, this re-rendering of 1000 users is heavy. So to prevent a component from re-rendering(when there is no change in the exact component). We use React.Memo to fix this issue. </p>
        
        <div className='mt-5'>
          <p className='text-2xl font-semibold text-blue-500'>Press F12 and see how memoization in react works. How? every time my count component re-renders, the component having list of participants do not re-render because they are <span className='underline text-sky-300 font-extrabold'>memoized</span>.</p>
          <span className='flex items-center gap-2 mt-5 '>
            <Button className="bg-yellow-500 p-2 hover:bg-cyan-900 hover:cursor-pointer" onClick={add}>Count</Button> 
            <p className='text-white'>: {count}</p>
          </span>
        </div>
      </div>
      <>
      <Participants />
      </>
    </div>
  )
}

export default MemoHook