import { DECREASE, INCREASE } from "../constant/counter-constant";

export const initialState = {count : 0} ;

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case INCREASE : 
            state = {...state, count : state.count +1}
            return state 
        case DECREASE :
            state =  {...state, count : state.count -1}
            return state 
        default:
            return state          
    }
}