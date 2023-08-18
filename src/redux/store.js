import { createStore } from "redux";
// import { reducer } from "./index";
// import bookingReducer from "./reducer/booking-reducer";
import cartReducer from "./reducer/cart-reducer";


export const store = createStore(cartReducer)