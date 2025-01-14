import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import Checkout from "./Checkout";
const Cart = () => {
  let data= useSelector(state=>state.cart);
  // if(data.length){
  //   localStorage.setItem("data",JSON.stringify(data))
  // }

  // const localData = JSON.parse(localStorage.getItem("data"))

  // if(localData){
  //   data = localData;
  // }
  
  
    return (
        <div className="Cart">
          <div className='title'>Cart</div>
          <div className="cart-page">
            <div className="cart-data">
                {
                  data.length>0&&data.map((product)=>(
                    <ItemCard product={product} cartBtn = {false}/>
                  ))
                }
              </div>
              <Checkout />
            </div>
        </div>
      );
}
 
export default Cart;