import {
   FETCH_POST_REQUEST,
   FETCH_POST_SUCCESS,
   FETCH_POST_FAILURE,
} from "./postTypes";
import axios from "axios";

export function fetchPostRequest() {
   return {
      type: FETCH_POST_REQUEST,
   };
}

export function fetchPostSuccess(post) {
   return {
      type: FETCH_POST_SUCCESS,
      payload: post,
   };
}

export function fetchPostFailure(error) {
   return {
      type: FETCH_POST_FAILURE,
      payload: error,
   };
}

export const fetchPost = (id) => {
   return function (dispatch) {
      dispatch(fetchPostRequest());
      axios
         .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) => dispatch(fetchPostSuccess(res.data)))
         .catch((err) => dispatch(fetchPostFailure(err.message)));
   };
};
