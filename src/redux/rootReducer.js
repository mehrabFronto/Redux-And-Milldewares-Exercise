import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
   cakes: cakeReducer,
   iceCreams: iceCreamReducer,
});

export default rootReducer;
