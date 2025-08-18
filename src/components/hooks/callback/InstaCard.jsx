import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@mui/material';

const InstaCard = () => {
    const url = 'https://dummyjson.com/posts';
    const [postData, setPostData]= useState([]);


    useEffect(()=> {
        async function fetchingPosts(){
            try {
                const data = await fetch(url);
                const response = await data.json();
                setPostData(response.posts);

            } catch (error) {
                console.log("While fetching posts", error)
            }
        }
        fetchingPosts()
    }, []);
    console.log("postData", postData);


    function increaseLikes(idParam){
        setPostData(function(item){
            return {
                ...item,
                reactions: {
                    likes : item.reactions.like + 1
                }
            }
        })
    }
    const ele = postData.map(function(item){
        return (
            <Card>
                <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.body}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => increaseLikes(item.reactions.likes)}>👍🏻 {item.reactions.likes}</Button>
                    {/* <p>Dislikes: {item.reactions.dislikes}</p> */}
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        )
    })
  return (
    <div className='grid grid-cols-4 gap-5'>
        {ele}
    </div>
  )
}

export default InstaCard