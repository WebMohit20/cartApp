import React from "react";
import { useSelector,useDispatch } from "react-redux";
import ItemCard from "./ItemCard";
import Checkout from "./Checkout";
// import { addToCart,removeFromCart,checkout } from "../redux/actions/cartAction";
const Cart = () => {
  const data= useSelector(state=>state.cart);
    return (
        <div className="Cart">
          <div className="cart-data">
              {
                data.length>0&&data.map((product)=>(
                  <ItemCard product={product} cartBtn = {true} />
                ))
              }
            </div>
            <Checkout />
        </div>
      );
}
 
export default Cart;