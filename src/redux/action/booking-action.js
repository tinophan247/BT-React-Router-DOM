import { BOOKING, CANCEL } from "../constant/booking-constant"

export const  bookingAction = (payload) => {

  return  {
        type: BOOKING,
        payload
    }
}

export const cancelAction = (payload) => {
    return {
        type: CANCEL,
        payload
    }
}