import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useEffect, useReducer, useRef, useState } from "react";

import ReducerSnippet from "./ReducerSnippet";

const UseReducer = () => {

  const todoRef = useRef(null);
  const [showReducerSnippet, setShowReducerSnippet] = useState(false);
  useEffect(() => {
   console.log(todoRef.current.focus()) 
  }, [])

  const defaultState = {
    todo : []
  }

  const reducer = (state, action) => {

    if(action.type === "ADD"){
      const newTodoList = [...state.todo, action.payload];
      console.log("newTodo", newTodoList)
      return {
        todo : newTodoList
      }
    }
    if(action.type === "DEL"){
      const newTodoList = state.todo.filter((item) => item.id !== action.payload);

      return {
        todo : newTodoList
      }
    }

  }
  const [state, dispatch] = useReducer( reducer, defaultState);
  
  let remove = (idParam) => {
    dispatch({type:"DEL", payload:idParam});
  }

  const ele = state.todo.map((item) => {
    return (
      <div className="flex justify-between mb-1 " key={item.id}>
        <p>{item.singleTodoData}</p>
        <Button onClick={() => remove(item.id)}>❌</Button>
      </div>
    )
  })

  let submitData = (e) => {
    e.preventDefault();
    console.log(todoRef.current.value);
    let newData = {
      id : new Date().getTime(),
      singleTodoData : todoRef.current.value
    }
    dispatch({type: "ADD", payload: newData});
  }

  function showSnippet(){
    setShowReducerSnippet(item =>!item)
  }
  
  return (
    <div className='p-15'>
      <div className="grid md:flex gap-5 items-center font-semibold lg:text-xl">
        <p className=' text-3xl sm:text-5xl md:text-6xl  text-white font-bold'>A todo app with <span className="text-yellow-500">useReducer</span> to manage <span className="text-red-600">States.</span></p>
        <p>Default state- The global State. Note: Every key in the default state acts like a state.</p>
        <p>Dispatch- In order to affect any thing state, we use dispatch. </p>
        <p>Action: A type of property in the dispatch function.</p>
        <p>Payload: the date we share through action in our reducer function.</p>
        <p>This is scalable and can share data anywhere with help of props or contextAPIs.</p>
      </div>
        
      <div className="mt-10 text-white font-semibold">
        <p onClick={showSnippet} className="hover:cursor-pointer mb-10 w-50"><span>{showReducerSnippet ? "Hide" : "Show"} </span>useReducer Snippet</p>
        {showReducerSnippet && <ReducerSnippet />}
      </div>
      <div className="mt-10 ">
        <form className="flex mb-10 gap-5" onSubmit={submitData}>
          <Input className="border-1 shadow-1xl" placeholder="Add an item" type="text" ref={todoRef} required />
          <Button className="w-40 hover:cursor-pointer" type="submit" variant="blueButton"> Enter</Button>
        </form>
        {ele}
      </div>
    </div>
  )
}

export default UseReducer