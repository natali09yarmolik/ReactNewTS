import React, {useState} from 'react';
import styled from "styled-components";
import s from './OnOff.module.css'


type onOffPropsType={
    on:boolean
    onChange: (on:boolean)=>void
}

const OnOffFirst=(props:onOffPropsType)=>{

const onStyle={
    display: 'inline-block',
    border: '1px solid black',
    width: '30px',
    height: '25px',
    backgroundColor: props.on ? 'green' : 'white'
    }
const offStyle={
    display: 'inline-block',
    width: '30px',
    height: '25px',
    border: '1px solid black',
    marginLeft:'15px',
    backgroundColor:!props.on ? 'red' : 'white'
}
const indicator={
    display:'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid black',
    marginLeft: '15px',
    backgroundColor: props.on ? 'green' : 'red'
}

    return(

        <div>
            <div onClick={() => props.onChange(true)}
                 style={onStyle} >ON</div>
            <div onClick={() => props.onChange(false)}
                 style={offStyle}>OFF</div>
            <div style={indicator}></div>

        </div>
    )
}

export const OnOff=React.memo(OnOffFirst)
