import React, {useEffect, useState, useMemo} from 'react';
import {fakeData} from '../../../../public/data.js'
import { Button } from '@/components/ui/button';

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
        console.log(sortedLevel);
        setPeopleData(sortedLevel)
    }
    function descendingLevelSort(){
        console.log("hi");
        const reverseLevel = [...peopleData].sort((x,y) => x.level - y.level).reverse(); 
        console.log(reverseLevel);
        setPeopleData(reverseLevel)
    }

  
    const peopleDisplay = peopleData.map((item) => {
        return (
        <Card key={item.id}>
            <CardHeader>
                <p>Level: {item.level}</p>
                <p>Score: {item.score}</p>
            </CardHeader>
        </Card>
        )
    })

    console.log(JSON.stringify(peopleData));

    return (
        <>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger >Filters</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={ascendingLevelSort}>Level^ </DropdownMenuItem>
                        <DropdownMenuItem onClick={descendingLevelSort}>Level down</DropdownMenuItem>
                        <DropdownMenuItem>Score ^</DropdownMenuItem>
                        <DropdownMenuItem>Score down</DropdownMenuItem>
                        <DropdownMenuItem>reset</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                {peopleDisplay} 
            </div>
        </>
    )
})

export default Participants