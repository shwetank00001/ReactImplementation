import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useRef, useState } from 'react'

import { io } from 'https://cdn.socket.io/4.8.1/socket.io.esm.min.js'

const ChatApp = () => {

  const msg = useRef(null);
  const [message, setMessage] = useState('');

  const [msgList, setList] = useState([]);

  const socket = io.connect("http://localhost:5000/")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message);
    socket.emit("send_message", {message: message })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setList(item => [data.message])
    })
  }, []);

  const displayMsg = msgList.map(function(item){
    return (
      <div key={item.id}>
        <p>{item}</p>
      </div>
    )
  });
  console.log(displayMsg)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeholder ="Add a message" value={message} onChange={e => setMessage(e.target.value)}/>
        <Button type='submit'>Send</Button>
      </form>
      {displayMsg}
    </div>
  )
}

export default ChatApp