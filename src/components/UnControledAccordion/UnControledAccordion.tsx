import React from 'react';

type AccordionPropsType={
    collapsed: boolean
    title: string
}
export function Accordion(props:AccordionPropsType){
    return (
        <div>
            <AccordionTitle title={props.title} />
            {!props.collapsed && <AccordionBody />}
        </div>
    )

}


function AccordionTitle(props:any){
    
    return (
        <>{props.title}</>
    )
}
function AccordionBody(){
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}