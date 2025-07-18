import React, { useEffect, useState } from 'react'

import useFetch from './useFetch';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Recipe = () => {

    const url = "https://dummyjson.com/recipes";
    const {commonData, loading} = useFetch(url);
    const allRecipes  = commonData?.recipes || []
     

    const recipeList = allRecipes.map(function(item){
        return (
            <Card key={item.id}>
                <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl lg:text-5xl font-extrabold lg:font-bold" >{item.name}</CardTitle>
                </CardHeader>

                <CardHeader className="grid grid-cols-2">
                     <CardDescription className="sm:text-2xl font-semibold lg:font-extrabold" >Ingredients Used</CardDescription>
                    <CardDescription className=" sm:text-2xl font-semibold lg:font-extrabold" >Ingredients Used</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2">
                    <div>
                        {item.ingredients.map(function(itemInIngredients){
                            return (
                                    <>
                                        <ol  className='list-disc'>
                                            <li>{itemInIngredients}</li>
                                        </ol>
                                        
                                    </>
                                )
                        })}
                    </div>
                    <div>
                        {item.instructions.map(function(itemInstructions){
                            return (
                                    <>
                                        <ol className='list-disc'>
                                            <li>{itemInstructions}</li>
                                        </ol>
                                        
                                    </>
                                )
                        })}
                    </div>

                </CardContent>

            </Card>
        )
    });
    console.log("Recipe console", allRecipes);
  return ( 
    <div className="flex flex-col lg:grid grid-cols-2 gap-5">
        {
             loading ? "": recipeList
        }
    </div>
  )
}

export default Recipe