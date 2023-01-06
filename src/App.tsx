import React, {ChangeEvent, useRef, useState} from 'react';

import './App.css';

import Rating from './components/Rating/Star';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControledAccordion} from "./components/UnControledAccordion/UnControledAccordion";
import {ratingValueType} from "./components/Rating/Star";
import {UncontroledRating} from "./components/UnControledRating/UnControledStar";
import {UnControledOnOff} from "./components/UnControledOnOff/UnControledOnOff";
import {ControlledInput, UncontrolledInput} from "./components/input";
import {Select} from "./components/select";


function App() {
let [ratingValue, setRatingValue]=useState<ratingValueType>(1)
let [collapsed, setCollapsed]=useState<boolean>(true)
    let[switchOn, setSwitchOn]=useState(false)
    const [value, setValue]= useState('')
    const[parentValue, setParentValue]=useState('')
    const[checkValue, setCheckValue]=useState(true)
    const[checkSelect, setCheckSelect]=useState<string | undefined>('2')
    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{

     setValue(e.currentTarget.value)
        console.log(setValue(e.currentTarget.value))
}
const inputRef=useRef<HTMLInputElement>(null)
    const save=()=>{
    const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    const onChangeInput=(e:ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.value)}
    const onChangeChecked=(e:ChangeEvent<HTMLInputElement>)=>{setCheckValue(e.currentTarget.checked)}
    const onChangeSelect=(e:ChangeEvent<HTMLSelectElement>)=>{setCheckSelect(e.currentTarget.value)}

    const [selectValue, setSelectValue]=useState(1)
    const items=[
        {title:'Moscow', value: 1},
        {title:'Paris', value: 2},
        {title:'Minsk', value: 3},
    ]
    const changeValueHandler=(changeValue:number)=>{
    setSelectValue(changeValue)
        setCollapsed(!collapsed)
    }
    return (
    <div>
        <input value={parentValue} onChange={onChangeInput}/>
        <input type='checkbox' onChange={onChangeChecked}/>
        <select value={checkSelect} onChange={onChangeSelect}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
        </select>
      {/*<input ref={inputRef}/>
        <button onClick={save}>save</button>
        actual value: {value}*/}
     <div> Hello</div>
        {/*<UnControledAccordion title={'Burger'}/>
        <UnControledAccordion title={'Hot-Dog'}/>*/}
        <UnControledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        <UncontroledRating />
       {/* <UncontrolledInput onChange={onChangeHandler}/>

        <button onClick={()=>setValue}>save</button> value:{value}*/}
        <ControlledInput value={value}/>
        <UnControledAccordion title={'Burger'}/>
    <Select value={selectValue}
            onChange={()=>setCollapsed(!collapsed)}
            collapsed={collapsed}
            items={items}
            onChangeValue={changeValueHandler}
    />

       {/* <Rating value={ratingValue} onClick={setRatingValue}/>*/}
       {/* <Accordion  title={'Burger'}  onChange={()=>setCollapsed(!collapsed)} collapsed={collapsed}/>*/}
        {/*<Accordion  title={'Hot-Dog'} onChange={()=>setCollapsed(!collapsed)} collapsed={collapsed}/>*/}
        {/*<OnOff on={switchOn} onChange={(on)=>setSwitchOn(on)}/>*/}








    </div>
  );
}

export default App;
