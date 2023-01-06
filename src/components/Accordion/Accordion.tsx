import React, {useState} from 'react';

type ItemType={
    title: string
    value: any

}

type AccordionPropsType={
    title: string
    onChange: ()=>void
    collapsed: boolean
    items:ItemType[]
    onClick:(value:any)=>void

}
type accordionTitlePropsType={
    title:string
    onChange: ()=>void

}
function AccordionExample(props:AccordionPropsType){
    let[value, setValue]=useState<boolean>(true)

    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}
                                                onClick={props.onClick}  />}

        </div>
    )

}
export const Accordion=React.memo(AccordionExample)
function AccordionTitle(props:accordionTitlePropsType){

    return (
        <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
    )
}
type PropsAccordionBody={
    items: ItemType[]
    onClick:(value:any)=>void
}
function AccordionBody(props:PropsAccordionBody){
    return (
        <div>
            <ul>
                {props.items.map((el, index)=><li key={index}
                                                                onClick={()=>{props.onClick(el.value)}} >{el.title}</li>)}

            </ul>
        </div>
    )
}