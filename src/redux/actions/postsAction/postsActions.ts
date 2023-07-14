import { postTypes } from "../../ActionTypes/postTypes";
import {
  FetchPostRequest,
  FetchPostSuccess,
  FetchPostFailure,
  FetchPostsSuccessPayload,
  FetchPostsFailurePayload,
} from "../../types/types";

export const fetchPostRequest = (): FetchPostRequest => ({
  type: postTypes.FETCH_POST_REQUEST,
});

export const fetchPostRequestSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostRequestFailure = (
  payload: FetchPostsFailurePayload
): FetchPostFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload,
});
