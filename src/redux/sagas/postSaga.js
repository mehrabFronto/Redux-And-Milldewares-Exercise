import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_POST_REQUEST } from "../post/postTypes";
import axios from "axios";
import { fetchPostFailure, fetchPostSuccess } from "../post/postActions";

function* fetchPost(action) {
   try {
      const endPoint = `http://jsonplaceholder.typicode.com/posts/${action.payload}`;
      const { data } = yield call(() => axios.get(endPoint));
      yield put(fetchPostSuccess(data));
   } catch (err) {
      yield put(fetchPostFailure(err.message));
   }
}

//  function* => generator function
export function* watchFetchPost() {
   yield takeEvery(FETCH_POST_REQUEST, fetchPost);
}
