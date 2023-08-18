import "./BookingTicket.css";
import listSeats from "../data/listSeat.json";
import SeatRows from "./SeatRows";
import SeatInformation from "./SeatInformation";

const BookingTicket = () => {
  return (
    <div
      className="bookingMovie"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./img/BookingTicket/bgmovie.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="w-full">
          <div className="text-2xl text-yellow-400 text-center ">
            ĐẶT VÉ XEM PHIM TINO CINEMA
          </div>

          <div className="flex">
            <div className="w-[70%] text-center">
            <div className="mt-3 text-white -ml-[230px]" style={{ fontSize: "25px" }}>
            Màn hình
          </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="screen"></div>
                {listSeats.map((item, index) => {
                  return (
                    <div key={index}>
                      <SeatRows seatRows={item} numberSeatRows={index} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[30%] -ml-20">
              <div style={{ fontSize: "30px" }} className="text-white mt-40 ">
                DANH SÁCH GHẾ BẠN CHỌN
              </div>
              <SeatInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
