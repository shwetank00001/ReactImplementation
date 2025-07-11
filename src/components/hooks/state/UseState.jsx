import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

import StateSnippet from './StateSnippet';

import { peoples } from './peopleData';

const UseState = () => {

  const [person, setPerson ] = useState(peoples);
  const personList = person.map((item) => {
    return (
      <div className='text-emerald-500 font-semibold ' key={item.id}>
        <p >{item.name}</p>
      </div>
    )
  })
  const [showStateCode, setShow] = useState(false);

  return (
    <div className='p-15 '>
      <div className='lg:text-xl flex flex-col gap-5'>
        <p className='text-red-600 font-bold text-3xl sm:text-5xl md:text-6xl '>useState</p>
        <p><span className='text-white'>What are hooks and why do we need them?</span> Hooks are functions provided by react and they are need to make our app dynamic. </p>
        <p><span className='text-white'>What is a state?</span> State is a function that is used manage data in a component.</p>
        <p><span className='text-white'>A healthy note 😝.</span> Never map over an object because map is an Array Protoype🤪.</p>
      </div>
      <div className='mt-5'>
        <Button onClick = {() => setShow(item => !item) }>{showStateCode ? "Show useState snippet" : "Hide useState snippet"} </Button>
        {showStateCode && <StateSnippet />}
      </div>
      <div className='mt-5'>
        <p className='text-2xl mb-5 font-extrabold text-cyan-600'>
          Displaying every person from my "peopleData.js"
        </p>
        {personList}
      </div>
    </div>
  )
}

export default UseState