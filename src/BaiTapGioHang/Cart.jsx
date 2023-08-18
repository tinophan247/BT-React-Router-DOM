import { useDispatch, useSelector} from "react-redux";
import CardItem from "./CardItem";
import { addToCartAction } from "../redux/action/cart-action";

const Cart = () => {
  const listProduct = useSelector(state => state.listProduct)
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCartAction(item))
  }

  return (
    <div className="w-full h-auto border border-[#337AB7] ">
      <p className="h-10 px-5 py-2 bg-[#337AB7] text-white">List Item</p>
      {
        listProduct.map((item,index)=>(
          <CardItem key={index} item={item} addToCart={() => handleAddToCart(item)} />
        ))
      }

    </div>
  );
};

export default Cart;
