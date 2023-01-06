import React, {useMemo, useState} from 'react';




export default {
    title: 'Select city',
  };
type itemType={
    idCity:number
    city:string
    populations:number
}
export function SelectCity(props: { items: Array<itemType> }) {

    return <div>
        <div>{props.items.map((u, i) => <div key={i}>{u.city}</div>)}</div>
    </div>
}
const City = React.memo(SelectCity)

export function HalpsToReactMemo() {
    console.log('HalpsToReactMemo')

    const [items, setItems] = useState([{idCity:1, city:'Minsk', populations:2},
                                                 {idCity:2, city:'Moscow', populations:8},
                                                 {idCity:3, city:'Kiev', populations:5},])
    const[kod, setKod]=useState(1)
    const[popul, setPopul]=useState(1)
    const newArray=useMemo(()=>{
        return items.filter((u=>u.city.toLowerCase().indexOf('m')>-1))
    }, [items])
    const kodCity=useMemo(()=>{
       return items.filter(el=>el.idCity===kod?el.city:'')},[kod])
    const population=useMemo(()=>{
        return items.filter(el=>el.populations>=popul?el.city:'')},[popul])

    return <>
        <button onClick={() => newArray}>filterCity</button>
        <City items={newArray}/>
        <input value={kod}
               onChange={(e)=>setKod(+e.currentTarget.value)}/>
        <ul>{kodCity.map(el=><li key={el.idCity}>{el.city}</li>)}</ul>
       <label> Enter population, mln.p
           <input value={popul}
                  onChange={(e)=>setPopul(+e.currentTarget.value)}/></label>
        <ul>{population.map(el=><li key={el.idCity}>{el.city} population {el.populations}</li>)}</ul>
    </>
}
/*
export function SelectKod() {
        const [items, setItems] = useState([{idCity:1, city:'Minsk', populations:2000000},
        {idCity:2, city:'Moscow', populations:8000000},
        {idCity:3, city:'Kiev', populations:5000000},])


    const newArray=useMemo(()=>{
        return items.filter((u=>u.city.toLowerCase().indexOf('m')>-1))
    }, [items])



    return <>
        <button onClick={() => newArray}>filterCity</button>
        <input value={kod}
               onChange={(e)=>setKod(+e.currentTarget.value)}/>
        <button onClick={() => newArray}>filterCity</button>
        <City items={newArray}/>
        {/!*<button onClick={() =>addUsers()}>add user</button>
        {counter}
        <Users users={newArray}/>*!/}
    </>
}
*/
