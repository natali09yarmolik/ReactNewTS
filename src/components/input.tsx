import React, {ChangeEvent, useState} from 'react';

type PropsUncontrolledInput={
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const UncontrolledInput=(props:PropsUncontrolledInput)=>{

    return(
        <div>
            <input onChange={props.onChange}/>
        </div>
        )

}
type PropsControlledInput={
    value: string
}
export const ControlledInput=(props:PropsControlledInput)=><input value={props.value}/>


