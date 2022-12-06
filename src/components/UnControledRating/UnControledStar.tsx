
import React, {useState} from 'react';

type starPropsType={
    selected:boolean
    setValue:(value:1|2|3|4|5)=>void

}

export function UncontroledRating(){
    let [value, setValue]=useState(1)
    return (
        <div>
            <Star selected={value>0} setValue={()=>setValue(1)} />
            <Star selected={value>1} setValue={()=>setValue(2)} />
            <Star selected={value>2} setValue={()=>setValue(3)} />
            <Star selected={value>3} setValue={()=>setValue(4)} />
            <Star selected={value>4} setValue={()=>setValue(5)} />
        </div>
    )
}


function Star(props:starPropsType){

    return <span onClick={(e)=>props.setValue(2)}>
        {props.selected ? <b> Star </b>: 'Star'}
    </span>
}



