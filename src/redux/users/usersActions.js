import {
   FETCH_USERS_REQUEST,
   FETCH_USERS_SUCCESS,
   FETCH_USERS_FAILURE,
} from "./usersTypes";
import axios from "axios";

function fetchUsersRequest() {
   return {
      type: FETCH_USERS_REQUEST,
   };
}

function fetchUsersSuccess(users) {
   return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
   };
}

function fetchUsersFailure(error) {
   return {
      type: FETCH_USERS_FAILURE,
      payload: error,
   };
}

export const fetchUsers = () => {
   return function (dispatch) {
      dispatch(fetchUsersRequest());
      axios
         .get("https://jsonplaceholder.typicode.com/user ")
         .then((res) => dispatch(fetchUsersSuccess(res.data)))
         .catch((err) => dispatch(fetchUsersFailure(err.message)));
   };
};
