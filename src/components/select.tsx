import React, {ChangeEvent, useState, MouseEvent, KeyboardEvent} from 'react';
import s from './select.module.css'
type SelectPropsType={
    value: any
    onChange:()=>void
    items:ItemType[]
    collapsed:boolean
    onChangeValue:(changeValue:number)=>void
}
type ItemType={
    title: string
    value: any
}

export const Select=(props:SelectPropsType)=>{
    const [hover, setHover]=useState(props.value)
    const onChangeHandler=props.items.find(el=>el.value===props.value)
    const hoverItem=props.items.find(el=>el.value===hover)
    const onKeyUp=(e:KeyboardEvent<HTMLDivElement>)=>{

        if(e.code==="ArrowDown")
        {
            for(let i=0; i<props.items.length; i++)
            {
                if(props.items[i].value===hover)
                {if(props.items[i+1])
                {
                   setHover(props.items[i+1].value)
                }
                }
            }
        }
        if(e.code==="ArrowUp")
        {
            for(let i=0; i<props.items.length; i++)
            {
                if(props.items[i].value===hover)
                {
                    if (props.items[i-1])
                    {
                        setHover(props.items[i-1].value)
                        break
                    }
                }
            }
        }
        if(e.code==='Enter')
        {
           props.onChangeValue(hover)
        }

    }


    return (<div className={s.container}
                 onKeyUp={onKeyUp} tabIndex={0}>
        <h3 onClick={(e)=>props.onChange()}> {onChangeHandler && onChangeHandler.title} </h3>
        <div className={s.selectContainer}>{!props.collapsed && props.items.map((el)=><div key={el.value}
                                                                   onMouseEnter={()=>setHover(el.value)}
                                                                   onClick={()=>props.onChangeValue(el.value)}
                                                                   className={s.select +" "+
                                                                       (hoverItem===el ? s.selectActive :'')} >
            {el.title}</div>)}
        </div>
        </div>
    )
}