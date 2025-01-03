import { POSTSTART,POSTSUCCESS,POSTFAILURE } from "./actions";
import axios from "axios";

const postStart =()=>{
    return{
        type:POSTSTART,
    }
}

const postSuccess =(data)=>{
    return{
        type:POSTSUCCESS,
        payload:data
    }
}

const postFailure = (error)=>{
    return{
        type:POSTFAILURE,
        payload:error
    }
}

const fetchAPI =()=>{
    return(
        (dispatch)=>{
            dispatch(postStart());
            axios.get("https://dummyjson.com/products")
            .then( (res)=>dispatch(postSuccess(res.data)) )
            .catch( (error)=>dispatch(postFailure(error.response.data)) )
        }
    )
}

export {fetchAPI};