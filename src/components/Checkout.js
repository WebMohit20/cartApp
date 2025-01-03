import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { checkout } from '../redux/actions/cartAction';

const Checkout = () => {
    const data = useSelector(state=>state.cart);
    
    
    const dispatch = useDispatch();
    function handleCheckout(){
        
        dispatch(checkout())
    }
    return ( 
        <div className="checkout">
            <ol>
                {
                    data&&data.map(item=>(
                        
                        <li key={item.id}> 
                            <span> {item.title} </span>
                            <span> ${item.price} </span>
                        </li>
                    ))

                }
            </ol>
            <span> Total : {
                data?data.reduce((total,item)=>total+item.price,0):0
                } 
            </span>
            <br/>
            <button onClick={handleCheckout}>Click To Checkout</button>
        </div>
     );
}
 
export default Checkout;