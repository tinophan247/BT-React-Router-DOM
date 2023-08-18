import { ADD_TO_CART, DECREASE, DELETE_CART, INCREASE } from "../constant/cart-constant"

export const  addToCartAction = (payload) => {
  return  {
        type: ADD_TO_CART,
        payload
    }
}

export const  deleteAction = (payload) => {
  return  {
        type: DELETE_CART,
        payload
    }
}

export const increaseAction = (payload) => {
  return {
    type : INCREASE,
    payload
  }
}

export const decreaseAction = (payload) => {
  return {
    type : DECREASE,
    payload
  }
}

