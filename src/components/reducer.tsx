

export type ActionType={
    type: string
}
export const TOGGALE_CONSTANT='TOGGALE-COLLAPSED'

export type StateType={
    collapsed:boolean
}
export const reducer=(state:StateType, action:ActionType):StateType=>{
    switch (action.type){
        case TOGGALE_CONSTANT:
            const stateCopy={...state}
            stateCopy.collapsed=!state.collapsed
            return stateCopy
        default:
            throw new Error('Bad action type')
    }
    return state
}