import {
   FETCH_POST_REQUEST,
   FETCH_POST_SUCCESS,
   FETCH_POST_FAILURE,
} from "./postTypes";

const initialState = {
   loading: false,
   post: null,
   error: null,
};

const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_POST_REQUEST:
         return { ...state, loading: true };

      case FETCH_POST_SUCCESS:
         return {
            ...state,
            loading: false,
            post: action.payload,
            error: null,
         };

      case FETCH_POST_FAILURE:
         return {
            ...state,
            loading: false,
            post: null,
            error: action.payload,
         };

      default:
         return state;
   }
};

export default postReducer;
