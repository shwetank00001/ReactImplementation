import React, { useEffect, useCallback, useState } from 'react'
import InstaCard from './InstaCard'

const CallbackHook = () => {

  // const [count, setCount] = useState(0);

  // const cart= ["Shwetank", "swapnil", "Adi", "akshat"];

  
  // const promise1 = new Promise((req,res) => {
  //   return function(){
  //     if(cart){
  //       res("the data is", cart)
  //     }
  //     else throw new Error("Not found")
  //   } 
  // })
  // useEffect(() => {
  //   const fetchData = async() => {
  //     promise1().then ((data) => {
  //       console.log(data)
  //     })
  //     .catch((err) => err)
  //   }
  //   fetchData()
  // }, [])

  // let add = useCallback(function(){
  //   setCount((i) => i+1);
  //   console.log("Memoized re-rendered")
  // }, [])

  return (
    <div className='p-15'>
      <InstaCard />
    </div>
  )
}

export default CallbackHook