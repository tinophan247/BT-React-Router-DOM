// import React from 'react'
import Cart from "./Cart";
import Checkout from "./Checkout";

const BaiTapGioHang = () => {
  return (
    <div className="w-full flex justify-center gap-10 mt-10">
        <div className="w-[45%] " >
            <Cart/>
        </div>
        <div className="w-[45%]" >
            <Checkout/>
        </div>
    </div>
  )
}

export default BaiTapGioHang;