import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useRef, useState } from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from 'sonner';

const Test = () => {
  const buttonRef = useRef(null);

  const inputRef = useRef(null);
  const textAreaRef = useRef(null);

  const [values, setValues] = useState([]);
  
  const handleSubmit =(e)=> {
    e.preventDefault();
    if(inputRef.current.value && textAreaRef.current.value){
      let inputData = inputRef.current.value;
      let textAreaData = textAreaRef.current.value;
      const newData = {
        id: new Date().getTime(),
        name: inputData,
        message: textAreaData
      }
      setValues((item) => [...item, newData]);
    }

    else toast("Fill the form before submitting.")
  }
  // console.log("new Data", values);

  function removeCard(idParam){
    console.log(idParam);
    const newCards = values.filter(function(item){
      return item.id !== idParam
    });
    console.log(newCards);
    setValues(newCards )
  }

  const displayMessage = values.map(function(item){
    return (
      <Card className={`break-all`} key={item.id}>
        <CardHeader className={`flex justify-between`}>
          <CardDescription className={`text-3xl text-blue-600`}>{item.message}</CardDescription>
          <CardDescription className={`text-3xl text-blue-600`}><Button onClick={() => removeCard(item.id)} className={`bg-purple-200 hover:bg-purple-300 hover:cursor-pointer`}>❌</Button></CardDescription>
        </CardHeader>
          <hr />
        <CardFooter >Created By: {item.name}</CardFooter>
        <CardFooter>Created at: {item.id}</CardFooter>
      </Card>
    )
  })

  useEffect(() => {
    inputRef.current.focus();
  })

  return (
    <div className='p-15'>
      <div className='text-md md:text-lg lg:text-xl grid md:grid-cols-3 gap-5 md:gap-10'>
        <p className='text-white'>Why do we need a ref? <span className='text-emerald-400 text-3xl sm:text-5xl md:text-6xl font-semibold'>useRef</span> is used mainly to target the DOM nodes.</p>
        <p>In a useState, whenever a state changes or updates, the whole component re-renders. <span className='text-lg md:text-xl lg:text-2xl font-semibold text-[#ffff66]'>useRef</span> is used in place of states just to counter the problem of re-rendering and preserves the value during components re-renders</p>
        <p>useRef is used to handle <span className='text-lg md:text-xl lg:text-2xl font-semibold text-[#d555ce]' >Uncontrolled Inputs</span> while handling forms.</p>
      </div>

      <div className='mt-5'>
        <code className='bg-blue-300 text-blue-800 p-1 rounded-xs'>  const buttonRef = useRef(null);</code>
      </div>

      <div className='mt-5'>
        <Button className={`bg-sky-400 hover:bg-sky-600 text-black`} ref = {buttonRef} onClick={() => {console.log(buttonRef.current)}}>Click to get button DOM info in console</Button>
      </div>

      <div className='mt-5'>
        <p>A basic name and message input area. Note: Open console to see how ref works.</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5'>
          <Input onClick= {() => {console.log("Input Node:", inputRef.current)}} className={`text-white rounded-sm border-1`} ref={inputRef} placeholder="Creator" />
          <Textarea onClick= {() => {console.log("TextArea Node:", textAreaRef.current)}} className={`text-white rounded-sm border-1`} ref={textAreaRef} placeholder="Tell us, how do you feel? <3"/>
          <Button type="submit">Submit</Button>
        </form>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {displayMessage}
        </div>
      </div>
    </div>
  )
}

export default Test