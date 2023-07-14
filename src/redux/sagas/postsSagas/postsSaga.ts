import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPosts";
import {
  fetchPostRequestFailure,
  fetchPostRequestSuccess,
} from "../../actions/postsAction/postsActions";
import { FetchPostsSuccessPayload } from "../../types/types";
import { postTypes } from "../../ActionTypes/postTypes";

const getPosts = () => {
  return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/todos");
};

function* fetchPostsSaga(): Generator<any> {
  try {
    const response: any = yield call(getPosts);
    console.log(response);
    yield put(
      fetchPostRequestSuccess({
        posts: response.data,
      })
    );
  } catch (err: any) {
    yield put(
      fetchPostRequestFailure({
        error: err.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
