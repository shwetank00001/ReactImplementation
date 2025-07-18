import React, {useEffect, useState, useMemo} from 'react';
import {fakeData} from '../../../../public/data.js'
import { Button } from '@/components/ui/button';
import { Funnel } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Participants = React.memo(() => {

    const [peopleData, setPeopleData] = useState(fakeData);

    function ascendingLevelSort(){
        console.log("hi");
        const sortedLevel = [...peopleData].sort((x,y) => x.level - y.level);  
        // sorted mutates and alters the same array -: react thinks that array is same itselfand hence it doesnt re render it, if i dont do sortedArray and use a function which doesnt directly affects the array -> in this case my state will re rende right?
        // console.log(sortedLevel);
        setPeopleData(sortedLevel)
    }
    function descendingLevelSort(){
        console.log("hi");
        const reverseLevel = [...peopleData].sort((x,y) => x.level - y.level).reverse(); 
        // console.log(reverseLevel);
        setPeopleData(reverseLevel)
    }

    function ascendingScoreSort(){
        const ascendingScoreFirst = [...peopleData].sort((x,y) => x.score - y.score);
        setPeopleData(ascendingScoreFirst)
    }

    function descendingScoreSort(){
        const descScoreFirst  = [...peopleData].sort((x,y) => x.score - y.score).reverse();
        setPeopleData(descScoreFirst)
    }

    function reset(){
        setPeopleData(fakeData)
    }
  
    const peopleDisplay = peopleData.map((item) => {
        return (
        <Card key={item.id}>
            <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl lg:text-5xl font-extrabold lg:font-bold">{item.name}</CardTitle>
            <CardDescription className="text-xl sm:text-3xl lg:text-4xl font-semibold lg:font-bold">{item.country}</CardDescription>
            <hr/>
            <CardDescription className="flex gap-2">
                <p className='font-bold'>Level: <span className='text-blue-500 font-bold'>{item.score}</span></p>
            </CardDescription>
            <CardDescription className="flex gap-2">
                <p className='font-bold'>Total Score: <span className='text-blue-500 font-bold'>{item.score}</span></p>
            </CardDescription>
            </CardHeader>
        </Card>
        )
    })

    console.log("Participants Component Re rendered!")

    // console.log(JSON.stringify(peopleData));

    return (
        <>
            <div className='mt-5'>
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-white font-semibold rounded-sm bg-blue-500 p-2 border-black-100 hover:cursor-pointer"><Funnel /></DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2">
                        <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={ascendingLevelSort}>Highest Level </DropdownMenuItem>
                        <DropdownMenuItem onClick={descendingLevelSort}>Lowest Level</DropdownMenuItem>
                        <DropdownMenuItem onClick={ascendingScoreSort}>Highest Scores</DropdownMenuItem>
                        <DropdownMenuItem onClick={descendingScoreSort}>Lowest Score </DropdownMenuItem>
                        <DropdownMenuItem onClick={reset}>Reset</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-5'>
                {peopleDisplay} 
            </div>
        </>
    )
})

export default Participants