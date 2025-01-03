import { POSTSTART,POSTSUCCESS,POSTFAILURE } from "../actions/actions";
const initialState ={
    loading:false,
    data:null,
    error:""
}
function postReducer(state=initialState,action){
    switch(action.type){
        case POSTSTART:
            return {...state,loading:true};
        case POSTSUCCESS:
            return {...state,
                loading:false,
                data:action.payload,
                error:""
            }; 
        case POSTFAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            };
        default:
            return state;
    }
}

export default postReducer;