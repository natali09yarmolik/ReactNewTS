import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect demo',
}



export function ExampleUseEffect() {
    console.log('useEffect')

    const [counter, setCounter] = useState(1)
    useEffect(()=>{
        console.log('Effect')
    })
       return <>
           Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}

export function ExampleSetTimeout() {
    console.log('setTimeout')

    /*const [fake, setFake]=useState(1)*/
    const [counter, setCounter] = useState(1)
    const [data, setData]=useState(new Date())

    useEffect(()=>{

       /* setTimeout(()=>{
            document.title=counter.toString()
        }, 1000)*/
       /* setInterval(()=>{
            setCounter(state=>state+1)
        }, 1000)
    }, []*/

    setInterval(()=>setCounter(+(setData(new Date()))), 1000)}, [])
    return <>
        Hello, data:{data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()}
     {/*   <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>{fake}
*/}
    </>
}