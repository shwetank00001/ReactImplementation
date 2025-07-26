import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef, useState } from 'react'

const Test = () => {
  const buttonRef = useRef(null);

  const inputRef = useRef(null);
  const textAreaRef = useRef(null);

  const [values, setValues] = useState([]);
  
  const handleSubmit =(e)=> {
    e.preventDefault();
    let inputData = inputRef.current.value;
    let textAreaData = textAreaRef.current.value;
    const newData = {
      id: new Date().getTime(),
      name: inputData,
      message: textAreaData
    }
    setValues((item) => [...item, newData]);
  }
  console.log("new Data", values);

  const displayMessage = values.map(function(item){
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.message}</p>
        <footer>created at: {item.id}</footer>
      </div>
    )
  })


  return (
    <div className='p-15'>
      <div className='text-md md:text-lg lg:text-xl grid md:grid-cols-3 gap-5 md:gap-10'>
        <p className='text-white'>Why do we need a ref? <span className='text-emerald-400 text-3xl sm:text-5xl md:text-6xl font-semibold'>useRef</span> is used mainly to target the DOM nodes.</p>
        <p>In a useState, whenever a state changes or updates, the whole component re-renders. <span className='text-lg md:text-xl lg:text-2xl font-semibold text-[#ffff66]'>useRef</span> is used in place of states just to counter the problem of re-rendering and preserves the value during components re-renders</p>
        <p>useRef is used to handle <span className='text-lg md:text-xl lg:text-2xl font-semibold text-[#d555ce]' >Uncontrolled Inputs</span> while handling forms.</p>
      </div>

      <div className='mt-5'>
        <p className='text-xl text-white'>A little example of useRef:- <code className='bg-blue-300 text-blue-800 p-1 rounded-xs'>  const buttonRef = useRef(null);</code> </p>
      </div>

      <div className='mt-5'>
        <Button className={`bg-sky-400 hover:bg-sky-600 text-black`} ref = {buttonRef} onClick={() => {console.log(buttonRef.current)}}>Click to get the DOM info in console.</Button>
      </div>

      <div className='mt-5'>
        <p>A basic name and message input area. Note: Open console to see how ref works.</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <Input className={`text-white rounded-sm border-1`} ref={inputRef} placeholder="enter your name" />
          <Textarea className={`text-white rounded-sm border-1`} ref={textAreaRef} placeholder="enter your message"/>
          <Button type="submit">Submit</Button>
        </form>
        {displayMessage}
      </div>
    </div>
  )
}

export default Test