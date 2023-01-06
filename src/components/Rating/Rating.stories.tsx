import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Rating, {ratingValueType} from "./Star";

export default {
    title: 'Rating',
    component: Rating,
};

function EmptyRating1(){return <Rating value={0} onClick={x=>x}/>}
 function Rating1First(){return <Rating value={1} onClick={x=>x}/>}
 function Rating2First(){return <Rating value={2} onClick={x=>x}/>}
function Rating3First(){return <Rating value={3} onClick={x=>x}/>}
 function Rating4First(){return <Rating value={4} onClick={x=>x}/>}
 function Rating5First(){return <Rating value={5} onClick={x=>x}/>}

function ChangeRatingFirst(){
    const[value, setValue]=useState<ratingValueType>(0)
    return(<Rating value={value} onClick={setValue}/>)
}
/*
export const EmptyRating=React.memo(EmptyRating1)
export const Rating1=React.memo(Rating1First)
export const Rating2=React.memo(Rating2First)
export const Rating3=React.memo(Rating3First)
export const Rating4=React.memo(Rating4First)
export const Rating5=React.memo(Rating5First)
export const ChangeRating=React.memo(ChangeRatingFirst)*/
