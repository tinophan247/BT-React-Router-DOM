import { useReducer } from "react";
import { initialState, reducer } from "./reducer/counter-reducer";
import { DECREASE, INCREASE } from "./constant/counter-constant";
import { handleDecrease, handleIncrease } from "./action/counter-action";

export default function Counter() {
    const [count, dispatch] = useReducer(reducer,initialState)
    console.log(count)
  return (
    <div style={{padding : "0 50px"}}>
        <h1>Counter App</h1>
        <p style={{color :' red' , fontWeight : 600, fontSize : '20px'}}>{count.count}</p>
        <button onClick={() => dispatch(handleIncrease(INCREASE))} style={{width : '100px', height : '50px', backgroundColor : 'grey', color: 'white', marginRight :'20px'}}>Increase</button>
        <button onClick={() => dispatch(handleDecrease(DECREASE))} style={{width : '100px', height : '50px', backgroundColor : 'grey', color: 'white'}}>Decrease</button>
    </div>
  )
}
