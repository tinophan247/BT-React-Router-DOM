/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { bookingAction } from "../redux/action/booking-action";

const SeatRows = ({ seatRows, numberSeatRows }) => {
  const listSelectingSeats = useSelector((state) => state.listSelectingSeats);
  const dispatch = useDispatch();

  const renderSeat = () => {
    return seatRows.listSeat.map((item, index) => {
      let cssSelectedSeat = "";
      let disabled = false;
      //Trạng thái ghế đã bị người khác đặt rồi
      if (item.booked) {
        cssSelectedSeat = "selectedSeat";
        disabled = true;
      }

      // //Xét trạng thái ghế đang đặt
      let cssSelectingSeat = '';
      let indexSelectingSeat = listSelectingSeats.findIndex(x=>x.numberSeat === item.numberSeat );
      if(indexSelectingSeat !== -1){
        cssSelectingSeat = 'selectingSeat'
      }

      return <button onClick={() => {
          dispatch(bookingAction(item))
      }} disabled={disabled} className={`seat ${cssSelectedSeat} ${cssSelectingSeat}`} key={index}>
          {item.numberSeat}
      </button>
    });
  };

  const renderRows = () => {
    return seatRows.listSeat.map((item, index) => {
      return <button className="rowNumber" key={index}>{item.numberSeat}</button>;
    });
  };

  const  renderSeatRows = () => {
    if (numberSeatRows === 0) {
        return <div className="ml-4">
            {seatRows.row} 
            {renderRows()}
        </div>
    } else {
        return <div>
            {seatRows.row} 
            {renderSeat()}
        </div>
    }

}

  return (
    <div
      className="text-white text-left ml-5 mt-1"
      style={{ fontSize: 30 }}
    >
        {renderSeatRows()}
    </div>
  );
};

export default SeatRows;
