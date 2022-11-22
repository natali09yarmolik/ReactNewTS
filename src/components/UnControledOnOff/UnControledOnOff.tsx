import React, {useState} from 'react';
import styled from "styled-components";
import s from './UnControledOnOff.module.css'

type UnControledOnOffPropsType={
    onChange:(active:boolean)=>void
}


export const UnControledOnOff=(props:UnControledOnOffPropsType)=>{

    let [active, setActive]=useState(true)

const onStyle={
    display: 'inline-block',
    border: '1px solid black',
    width: '30px',
    height: '25px',
    backgroundColor: active ? 'green' : 'white'
    }
const offStyle={
    display: 'inline-block',
    width: '30px',
    height: '25px',
    border: '1px solid black',
    marginLeft:'15px',
    backgroundColor:!active ? 'red' : 'white'
}
const indicator={
    display:'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid black',
    marginLeft: '15px',
    backgroundColor: active ? 'green' : 'red'
}
const onClicked=()=>{setActive(true)
                     props.onChange(true)}
const ofClicked=()=>{setActive(false)
    props.onChange(false)}



    return(

        <div>
            <div style={onStyle}
                 onClick={onClicked}>ON</div>
            <div onClick={ofClicked}
                 style={offStyle}>OFF</div>
            <div style={indicator}></div>

        </div>
    )
}

