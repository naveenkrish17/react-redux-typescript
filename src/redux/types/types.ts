import { IPost } from "../../models/IPosts";
import { postTypes } from "../ActionTypes/postTypes";

export interface PostsState {
  posts: IPost[];
  pending: boolean;
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export interface FetchPostSuccess {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
}

export interface FetchPostFailure {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
}

export type PostsAction = 
    | FetchPostSuccess
    | FetchPostFailure
    | FetchPostRequest