import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
   cakes: cakeReducer,
   iceCreams: iceCreamReducer,
   users: usersReducer,
});

export default rootReducer;
