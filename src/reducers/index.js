import { combineReducers } from "redux";
import cryptoReducer from './cryptoReducer';

let rootReducer = combineReducers({
    crypto: cryptoReducer
});

export default rootReducer;