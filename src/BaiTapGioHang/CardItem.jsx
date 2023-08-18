/* eslint-disable react/prop-types */
const CardItem = ({item, addToCart}) => {

  return (
    <div className="h-[200px] p-5 flex gap-5">
      <img
        className="w-40 h-40 border border-gray-400 rounded-lg"
        src={item.image}
        alt="not-found"
      />
      <div>
        <p className="font-medium text-xl">{item.productName}</p>
        <p>
          {item.title}
        </p>
      </div>
      <div className="flex justify-around flex-col">
        <input
          className="w-16 h-7 border border-black text-center"
          type="number"
          defaultValue={1}
        />
        <button onClick={addToCart} className={`bg-[#FF6633] text-white w-16 h-7 border text-center`}>
          {item.price} USD
        </button>
      </div>
    </div>
  );
};

export default CardItem;
