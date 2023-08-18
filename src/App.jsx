// import { Route, Routes } from "react-router-dom"
// import HomePage from "./pages/HomePage"
// import AboutPage from "./pages/About"
// import ShoppingPage from "./pages/Product"
// import NotFoundPage from "./pages/404"
// import LoginPage from "./pages/Login"
// import CartPage from "./pages/CartPage"
// import BookingTicket from "./BaiTapBookingTicket/BookingTicket"
// import Counter from "./redux/counter"

import BaiTapGioHang from "./BaiTapGioHang"

function App() {

  return (
    // <Routes>
    //   <Route path="/" element={<HomePage/>}/>
    //   <Route path="/home" element={<HomePage/>}/>
    //   <Route path="/about" element={<AboutPage/>}/>
    //   <Route path="/productList" element={<ShoppingPage/>}/>
    //   <Route path="/*" element={<NotFoundPage/>}/>
    //   <Route path="/login" element={<LoginPage/>}/>
    //   <Route path="/cart" element={<CartPage/>}/>
    // </Routes>
    <>
    {/* <Counter/> */}
    {/* <BookingTicket/> */}
    <BaiTapGioHang/>
    </>
  )
}

export default App
