import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import Checkout from "./Checkout";
const Cart = () => {
  let data= useSelector(state=>state.cart);
  
  // if(localStorage.getItem("data")){
  //   data=(localStorage.getItem("data"))
  //  console.log(data);
   
    
  // }
  
  // if(data){
  //   localStorage.setItem("data",JSON.stringify(data))
  // }
    return (
        <div className="Cart">
          <div className="cart-data">
              {
                data.length>0&&data.map((product)=>(
                  <ItemCard product={product} cartBtn = {false}/>
                ))
              }
            </div>
            <Checkout />
        </div>
      );
}
 
export default Cart;