import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
};
const callback=action('on or off cliced');
export function OnMode(){return <OnOff on={true} onChange={callback}/>}
export function OffMode(){return <OnOff on={false} onChange={callback}/>}

export function ModeChange(){
    const[value, setValue]=useState<boolean>(true)
    return(<OnOff on={value} onChange={setValue}/>)
}
