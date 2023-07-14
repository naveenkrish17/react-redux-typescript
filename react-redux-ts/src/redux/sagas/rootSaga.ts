import { all, fork } from "redux-saga/effects";
import postsSaga from "./postsSagas/postsSaga";

export function* rootSaga(): Generator<any> {
  yield all([fork(postsSaga)]);
}
