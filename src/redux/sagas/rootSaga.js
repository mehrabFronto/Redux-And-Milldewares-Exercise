import { all } from "redux-saga/effects";
import { watchFetchPost } from "./postSaga";
import { whatchFetchUsers } from "./userSaga";

export function* rootSaga() {
   yield all([watchFetchPost(), whatchFetchUsers()]);
}
