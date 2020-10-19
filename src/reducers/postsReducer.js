import { GET_POSTS_BY_ID } from "../constants";

export default function (state = [], action) {
  switch (action.type) {
    case GET_POSTS_BY_ID:
      return [action.payload, ...state];

    default:
      return state;
  }
}
