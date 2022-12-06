import React, {useState} from 'react';

import './App.css';

import Rating from './components/Rating/Star';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControledAccordion} from "./components/UnControledAccordion/UnControledAccordion";
import {ratingValueType} from "./components/Rating/Star";
import {UncontroledRating} from "./components/UnControledRating/UnControledStar";
import {UnControledOnOff} from "./components/UnControledOnOff/UnControledOnOff";


function App() {
let [ratingValue, setRatingValue]=useState<ratingValueType>(1)
let [collapsed, setCollapsed]=useState<boolean>(false)
    let[switchOn, setSwitchOn]=useState(false)
  return (
    <div>
      
     <div> Hello</div>
        {/*<UnControledAccordion title={'Burger'}/>
        <UnControledAccordion title={'Hot-Dog'}/>*/}
        <UnControledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        <UncontroledRating />

       {/* <Rating value={ratingValue} onClick={setRatingValue}/>*/}
        <Accordion  title={'Burger'}  onChange={()=>setCollapsed(!collapsed)} collapsed={collapsed}/>
        {/*<Accordion  title={'Hot-Dog'} onChange={()=>setCollapsed(!collapsed)} collapsed={collapsed}/>*/}
        {/*<OnOff on={switchOn} onChange={(on)=>setSwitchOn(on)}/>*/}








    </div>
  );
}

export default App;
