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

      <div>
        <p className='text-xl text-white'><span className='text-5xl font-bold text-yellow-400 '>useCallback</span> is used to memoize a function. What does memoization of a function mean? It means that if a Component re renders, the value of the function remains same, i.e the calling/calculation of the function doesn't take place and the stored value on the initial render is used.</p>
      </div>
      <div className='mt-5'>
        <InstaCard />
      </div>
    </div>
  )
}

export default CallbackHook