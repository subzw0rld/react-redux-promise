import { GET_USERS } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return [action.payload, ...state];

    default:
      return state;
  }
}
