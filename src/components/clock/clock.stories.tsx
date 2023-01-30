import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
};

export function BaseAnalogExample(){
     return(<Clock mode={'analog'}/>)
}

export function BaseDigitalExample(){
    return(<Clock mode={'digital'}/>)
}