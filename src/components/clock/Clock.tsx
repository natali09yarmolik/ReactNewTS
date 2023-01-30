import React, {FC, useEffect, useState} from 'react'
import s from './clock.module.css'
type PropsType={
    mode? : 'analog' | 'digital'
}
export const Clock:React.FC<PropsType>=(props)=>{

    const [data, setDate]=useState(new Date())
    useEffect(()=>{

       let interval=setInterval(()=>setDate(new Date()), 1000 );
            return ()=>clearInterval(interval)
    }, [])



   /* let time=(data.getHours()<10?'0'+ data.getHours(): data.getHours())+":"+
        (data.getMinutes()<10?'0'+ data.getMinutes(): data.getMinutes())+":"+
        (data.getSeconds()<10?'0'+ data.getSeconds(): data.getSeconds())*/
    let view
    switch (props.mode){
        case 'analog':
            view=<AnalogClockView data={data}/>
            break;
        case 'digital':
        default: view=<DigitalClockView data={data}/>
    }

    return(
        <div>
            {view}

        </div>
    )
}
export type ClockViewPropsType={
    data: Date
}
export const DigitalClockView:React.FC<ClockViewPropsType>=({data})=>{
return(
    <div className={'clock'}>

        {(data.getHours()<10?'0'+ data.getHours(): data.getHours())+":"+
            (data.getMinutes()<10?'0'+ data.getMinutes(): data.getMinutes())+":"+
            (data.getSeconds()<10?'0'+ data.getSeconds(): data.getSeconds())}

    </div>
)
}

export const AnalogClockView:React.FC<ClockViewPropsType>=({data})=>{
    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };
 return(
     <div className={s.clock}>
         <div className={s.analogClock}>
             <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
             <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
             <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
         </div>
        </div>
 )
}