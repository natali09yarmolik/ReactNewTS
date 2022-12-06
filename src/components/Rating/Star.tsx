import React, {useState} from 'react';


export type ratingValueType=0|1|2|3|4|5

type RatingTypesProps={
    value: ratingValueType
    onClick: (value:ratingValueType) => void
}

type starPropsType={
    selected:boolean
    value: ratingValueType
    onClick:(value:ratingValueType)=>void
}


function Rating(props:RatingTypesProps){


    return (
        <div>
        <Star selected={props.value>0} onClick={props.onClick} value={1}/>
        <Star selected={props.value>1} onClick={props.onClick} value={2}/>
        <Star selected={props.value>2} onClick={props.onClick} value={3}/>
        <Star selected={props.value>3} onClick={props.onClick} value={4}/>
        <Star selected={props.value>4} onClick={props.onClick} value={5}/>
</div>
    )
}


function Star(props:starPropsType){

    return <span onClick={(e)=>props.onClick(props.value)}>
        {props.selected ? <b> Star </b>: 'Star'}
    </span>
}
export default Rating;