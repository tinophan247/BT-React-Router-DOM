/* eslint-disable react/prop-types */

// import { useState } from "react"

const CheckoutTR = ({item,index, handleDelete, handleIncrease, handleDecrease}) => {
    // const [quantity , setQuantity] = useState(item.quantity);

    // const handleChange = (event) => {
    //     setQuantity(event.target.value);
    // }

  return (
    <tr className="border border-b-black">
    <td className="px-6 py-3">{index + 1}</td>
    <td className="px-6 py-3">{item.productName}</td>
    <td className="px-6 py-3">{item.price} USD</td>
    <td className="px-1 py-3">
      <div
        className=" h-7 border border-black text-center flex justify-between items-center"
      >
        <button className="font-bold text-xl w-5" onClick={handleIncrease}>+</button>
        <p>{item.quantity}</p>
        <button className="font-bold text-xl w-5" onClick={handleDecrease}>-</button>
      </div>
    </td>
    <td className="px-6 py-3 ">
      {item.price * item.quantity} USD
    </td>
    <td className="text-white flex gap-2 items-center h-16 mr-3">
      <button
        onClick={handleDelete}
        className="bg-[#D9534F] p-2 h-7 flex items-center  rounded-sm"
      >
        Delete
      </button>
    </td>
  </tr>
  )
}

export default CheckoutTR