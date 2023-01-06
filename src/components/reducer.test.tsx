import {reducer, StateType, TOGGALE_CONSTANT} from "./reducer";

test('reducer should change value to opposite value', ()=>{

const state:StateType ={
    collapsed:false
}

const newState=reducer(state, {type:TOGGALE_CONSTANT})

    expect(newState.collapsed).toBe(true)
})