import { createStore ,combineReducers,applyMiddleware} from "redux";
import cartReducer from "./reducer/cartReducer";
import postReducer from "./reducer/postReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    cart:cartReducer,
    post:postReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;