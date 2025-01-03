import React from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';
const ItemCard = ( {product} ) => {
    const cartData = useSelector(state=>state.cart);
    
    const dispatch = useDispatch();
    function handleCart(product){
        let isAlreadyInCart = cartData.find(item=>item.id===product.id) 
        if(!isAlreadyInCart) dispatch(addToCart( product))    
    }
    
    
    return ( 
        <div className='Card' key={product.id}>
            <div className='image'>
                <img src={product?.images[0]}
                 alt={product?.title}
                  style={{
                    width:"200px",
                    height:"200px"
                  }}/>
            </div>
            <div className='t&p'>
                Title : {product?.title}<br/>
                Price : ${product?.price}
            </div>
            <button onClick={()=>handleCart(product) }>Add To Cart</button>
        </div>
     );
}
 
export default ItemCard;

// 

// 

// 9.99