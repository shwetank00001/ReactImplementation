import React, { useState } from 'react'
import Participants from './Participants'
import { Button } from '@/components/ui/button';


const MemoHook = () => {

  const [count,setCount] = useState(0);
  function add(){
    setCount(i => i+1)
  }

  return (
    <div className='p-15'>
      <div>
        <p>List of every participant with their respective levels and scores. (This data was generated using faker JS)</p>
        <Button onClick={add}>Count</Button> 
        <p>Count: {count}</p>
      </div>
      <>
      <Participants />
      </>
    </div>
  )
}

export default MemoHook