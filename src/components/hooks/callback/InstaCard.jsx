import React, { useEffect, useState } from 'react'
import {
  Card,
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


    function increaseLikes(idParam) {
        setPostData(function(prevPosts) {
            return prevPosts.map(function(post) {
            if (post.id === idParam) {
                return {
                ...post,
                reactions: {
                    ...post.reactions,
                    likes: post.reactions.likes + 1
                }
                };
            } else {
                return post;
            }
            });
        });
    }
    const ele = postData.map(function(item){
        return (
            <Card className={`bg-purple-100`}> 
                <CardHeader>
                    <CardTitle className={`text-xl`}>{item.title}</CardTitle>
                    <CardDescription>{item.body}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => increaseLikes( item.id,item.reactions.likes)}>👍🏻 {item.reactions.likes}</Button>
                    {/* <p>Dislikes: {item.reactions.dislikes}</p> */}
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        )
    })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {ele}
    </div>
  )
}

export default InstaCard