import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USERS_REQUEST } from "../users/usersTypes";
import axios from "axios";
import { fetchUsersFailure, fetchUsersSuccess } from "../users/usersActions";

function* fetchUsers() {
   try {
      const endPoint = "https://jsonplaceholder.typicode.com/users";
      const { data } = yield call(() => axios.get(endPoint));
      yield put(fetchUsersSuccess(data));
   } catch (err) {
      yield put(fetchUsersFailure(err));
   }
}

export function* whatchFetchUsers() {
   yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}
