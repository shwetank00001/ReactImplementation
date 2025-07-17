import React, { useState } from 'react'
import useFetch from './useFetch'
import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Products = () => {

  const url = "https://dummyjson.com/products/";

  const {commonData, loading} = useFetch(url);

  console.log("Comment Data", commonData);

  let allProducts = commonData?.products || [];

  const productsDisplay = allProducts.map(function(item){
    return (
      <Card key={item.id}>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl lg:text-5xl font-extrabold lg:font-bold">{item.title}, {item.brand}</CardTitle>
          <CardDescription className="font-semibold lg:font-bold">{item.description}</CardDescription>

          <img src={item.images[0]}/>
          <CardDescription className="flex gap-2">
            {item.tags.map(function(itemTagList){
              return (
                <Badge className="bg-purple-500">{itemTagList}</Badge>
              )
            })}
          </CardDescription>
        </CardHeader>
        <hr/>
        {/* <CardContent className="flex items-center gap-2">
          <Label htmlFor="showDetails">Show more details</Label>
          <Switch onClick={() => handleShowDetails(item.id)} id="showDetails" />
        </CardContent> */}

        <CardContent className="font-semibold" >
          <p>Price: {item.price}</p>
          
          <p>Rating: {item.rating}</p>
          <p>{item.stock}</p>
          <p>{item.warrantyInformation}</p>
          <p>{item.shippingInformation}</p>
          <p>{item.availabilityStatus}</p>
        </CardContent>

        <CardFooter>

          <p>Product SKU: {item.sku}</p>
        </CardFooter>
      </Card>
    )
  })

  
  return (
    <div  className="flex flex-col lg:grid grid-cols-2 gap-5">
      {loading ? "Simulating a 3second delay on the API Call!" : productsDisplay}
    </div>
  )
}

export default Products