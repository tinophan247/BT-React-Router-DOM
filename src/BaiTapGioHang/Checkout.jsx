import { useDispatch, useSelector } from "react-redux";
import { decreaseAction, deleteAction, increaseAction } from "../redux/action/cart-action";
import CheckoutTR from "./CheckoutTR";

const Checkout = () => {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteAction(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseAction(item));
  };

  const handleDecrease = (item) => {
    if(item.quantity <= 1) {
      dispatch(deleteAction(item));
    }else {
      dispatch(decreaseAction(item));
    }
  };

  const totalItems = cartList.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cartList.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  return (
    <div>
      <div className="w-full h-auto border border-[#F2DEDE]">
        <p className="h-10 px-5 py-2 bg-[#F2DEDE] text-[#D9534F]">Your Cart</p>
        <div className="p-5">
          <table className="table-fixed border border-black">
            <thead>
              <tr className="border border-b-black">
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-1 py-3">Price</th>
                <th className="px-3 py-3">Quantity</th>
                <th className="px-6 py-3">Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartList.length > 0 &&
                cartList.map((item, index) => (
                  <CheckoutTR
                    key={index}
                    item={item}
                    index={index}
                    handleDelete={() => handleDelete(item)}
                    handleIncrease={() => handleIncrease(item)}
                    handleDecrease={() => handleDecrease(item)}
                  />
                ))}
            </tbody>
          </table>
          {cartList.length === 0 && (
            <p className="font-medium border border-b-black px-5 py-3">
              Empty Product in your cart
            </p>
          )}

          <div className="font-medium border border-b-black px-5 py-3 h-20 flex">
            <p>
              There are {totalItems} {totalItems > 1 ? "items" : "item"} in your
              shopping cart
            </p>
            <p className="font-bold text-red-500 ml-20 text-lg">
              {totalPrice} USD
            </p>
          </div>
        </div>
      </div>
      <p className="h-10 px-5 py-2 bg-[#DFF0D8] text-green-700 mt-6">
        Updated Ivysaur
      </p>
    </div>
  );
};

export default Checkout;
