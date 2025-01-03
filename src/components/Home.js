import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAPI } from '../redux/actions/postAction';
import ItemCard from './ItemCard';
const Home = () => {
    const dispatch = useDispatch();
    const {loading,data,error} = useSelector(state=>state.post);
    useEffect( ()=>{
        dispatch(fetchAPI())
    },[] )
    
    
    if(loading){
        return(
            <div style={{
                display:"flex",
                height:"100vh",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"40px"
            }}>
                Fetching Data.....
            </div>
        )
    }
    if(error){
        <p> {error} </p>
    }
    return ( 
        <div className='Home'>
            {
                data&&data?.products?.map( (product)=>(
                    <ItemCard product={product} cartBtn ={true} />
                ) )
            }
        </div>
     );
}
 
export default Home;