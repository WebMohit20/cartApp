import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { checkout } from '../redux/actions/cartAction';

const Checkout = () => {
    let data = useSelector(state=>state.cart);
    
    const dispatch = useDispatch();
    // const localData = JSON.parse(localStorage.getItem("data"));
    // if(localData){
    //     data=localData;
    // }
    function handleCheckout(){
        // localStorage.setItem("data",JSON.stringify([]));
        dispatch(checkout())
    }
    return ( 
        <div className="Checkout">
            <ol>
                {
                    data&&data.map((item,index)=>(
                        
                        <li key={item.id}> 
                            
                            <span>{`${index+1}.  ${ item.title}`} </span>
                            <span> ${item.price} </span>
                        </li>
                    ))

                }
            </ol>
            <span> Total : {
                data?data.reduce((total,item)=>+(total+item.price).toFixed(2),0):0
                } 
            </span>
            <br/>
            <button onClick={handleCheckout}>Click To Checkout</button>
        </div>
     );
}
 
export default Checkout;