// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { cancelAction } from "../redux/action/booking-action";

const SeatInformation = () => {
  const listSelectingSeats = useSelector((state) => state.listSelectingSeats);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-5">
        <button className="selectedSeat"> </button>{" "}
        <span className="text-white" style={{ fontSize: "30px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="selectingSeat"> </button>{" "}
        <span className="text-white" style={{ fontSize: "30px" }}>
          Ghế đang đặt
        </span>
        <br />
        <button className="seat" style={{ marginLeft: 0 }}>
          {" "}
        </button>{" "}
        <span className="text-white" style={{ fontSize: "30px" }}>
          Ghế chưa đặt
        </span>
      </div>

      <div className="mt-5">
        <table className="table" border="2">
          <thead>
            <tr className="text-white" style={{ fontSize: 25 }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-yellow-400">
            {listSelectingSeats.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.numberSeat}</td>
                  <td>{item.price && item.price.toLocaleString()}VND</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(cancelAction(item.numberSeat));
                      }}
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-yellow-400" style={{ fontSize: 25 }}>
              <td></td>
              <td>Tổng tiền</td>
              <td>
                {listSelectingSeats
                  .reduce((acc, curr) => {
                    return (acc += curr.price);
                  }, 0).toLocaleString()
                  }VND
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SeatInformation;
