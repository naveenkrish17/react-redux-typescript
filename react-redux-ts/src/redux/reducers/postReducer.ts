import { postTypes } from "../ActionTypes/postTypes";
import { PostsAction, PostsState } from "../types/types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
};

export default (state = initialState, action: PostsAction) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
