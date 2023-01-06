import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
};
const callback=action('some item was clicked');

export function collapsedAccordion(){return <Accordion title={'burger'}
                                                       onChange={callback}
                                                       collapsed={true}
                                                       items={[]}
                                                       onClick={callback}/>}

export function unCollapsedAccordion(){return <Accordion title={'hot-dog'}
                                                         onChange={callback}
                                                         collapsed={false}
                                                         items={[{title:'Olga', value: 1}, {title:'Sveta', value: 2},
                                                             {title:'Masha', value: 3}]}
                                                         onClick={callback}  />}

export function Mode(){
    const[value, setValue]=useState<boolean>(true)
    return(<Accordion title={'burger'}
                      onChange={()=>setValue(!value)}
                      collapsed={value}
                      items={[{title:'Olga', value: 1}, {title:'Sveta', value: 2},
                          {title:'Masha', value: 3}]}
                      onClick={callback} />)
}
