import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/actions/cartAction';
const ItemCard = ( {product,cartBtn} ) => {
    const cartData = useSelector(state=>state.cart);
    
    
    const dispatch = useDispatch();
    function handleCart(product){
        let isAlreadyInCart = cartData.find(item=>item.id===product.id)
        if(!isAlreadyInCart){
           dispatch(addToCart( product)) 
        } 
    }
    
    function removeItem(product){
        dispatch(removeFromCart(product.id))
    }
    return ( 
        <div className='Card' key={product.id}>
            <div className='image'>
                <img src={product?.images[0]}
                 alt={product?.title}
                  />
            </div>
            <div className='t&p'>
                Title : {product?.title}<br/>
                Price : ${product?.price}
            </div>
            {<button onClick={()=>cartBtn?handleCart(product):removeItem(product) }>{cartBtn?"Add To Cart":"Remove From Cart"}</button>}
        </div>
     );
}
 
export default ItemCard;