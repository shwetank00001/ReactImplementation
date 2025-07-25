import React, { useState } from 'react';
import StateSnippet from './StateSnippet';
import { peoples } from './peopleData';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const UseState = () => {

  const [person, setPerson ] = useState(peoples);
  const personList = person.map((item) => {
    return (
        <TableBody >
          <TableRow >
            <TableCell className={`p-3`}>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className={`text-right`}>{item.address}</TableCell>
          </TableRow>
        </TableBody>

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
        <Button className={`bg-red-600  hover:bg-red-400 hover:cursor-pointer`} onClick = {() => setShow(item => !item) }>{showStateCode ? "Hide useState snippet" : "Show useState snippet"} </Button>
        {showStateCode && <StateSnippet />}
      </div>
      <div className='mt-5'>
        <p className='text-2xl mb-5 font-extrabold text-cyan-500'>
          Displaying every person from my "peopleData.js"
        </p>
      </div>
      <Table className="text-white border-1 rounded font-semibold ">
        <TableHeader >
          <TableRow  >
            <TableHead className={`text-blue-500 p-3 text-lg font-bold`} >Rating</TableHead>
            <TableHead className={`text-blue-500 text-lg  font-bold`}>Name</TableHead>
            <TableHead className={`text-blue-500  text-lg  text-right  font-bold`}>Address</TableHead>
          </TableRow>
        </TableHeader>
      {personList}
      </Table>
    </div>
  )
}

export default UseState