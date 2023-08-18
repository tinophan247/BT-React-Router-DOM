import { BOOKING, CANCEL } from "../constant/booking-constant";

const initialState = {
    listSelectingSeats: []
}

const bookingReducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOKING: {
            let listSelectingSeatsUpdate = [...state.listSelectingSeats];
            let index = listSelectingSeatsUpdate.findIndex(item => item.numberSeat === action.payload.numberSeat);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                //
                listSelectingSeatsUpdate.splice(index, 1);
            }else {  //khi người dùng click Ghế đang đặt chưa có trong mảng => push vào mảng
                listSelectingSeatsUpdate.push(action.payload)
            }
            //Cập nhật lại state => giao diện render lại
            state.listSelectingSeats = listSelectingSeatsUpdate;
            return { ...state }
        }
        case CANCEL : {
            let listSelectingSeatsUpdate = [...state.listSelectingSeats];
            let index = listSelectingSeatsUpdate.findIndex(item => item.numberSeat === action.payload);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                //
                listSelectingSeatsUpdate.splice(index, 1);
            }
            state.listSelectingSeats = listSelectingSeatsUpdate;
            return {...state};
        }
        default: return { ...state }
    }
}


export default bookingReducer;