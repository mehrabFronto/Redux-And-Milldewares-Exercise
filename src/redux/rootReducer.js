import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import usersReducer from "./users/usersReducer";
import postReducer from "./post/postReducer";

const rootReducer = combineReducers({
   cakes: cakeReducer,
   iceCreams: iceCreamReducer,
   users: usersReducer,
   post: postReducer,
});

export default rootReducer;
