import React, {useState} from 'react';

type AccordionPropsType= {
    title: string

}
type accordionTitlePropsType={
    title: string
    onClick: ()=>void
}
export function UnControledAccordion(props:AccordionPropsType){
    let [coll, setColl]=useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{setColl(!coll)}}/>

            {coll && <AccordionBody />}
        </div>
    )

}


function AccordionTitle(props:accordionTitlePropsType){
    
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
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