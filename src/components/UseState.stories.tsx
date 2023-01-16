import React, {useMemo, useState} from 'react'

export default {
    title: 'UseState demo',
}

function general(){
    console.log('general')
    return 32488956232
}

export function Example1() {
    console.log('Example_1')
   /* const initState=useMemo(()=>general, [])*/
    const [counter, setCounter] = useState(general)
       return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
           {counter}
    </>
}