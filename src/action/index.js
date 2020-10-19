import axios from "axios";
import { GET_POSTS, GET_USER } from "../config";
import { GET_POSTS_BY_ID, GET_USERS } from "../constants";

export function getUsers() {
//   console.log("called");
  const USERS = axios.get(GET_USER);

  return {
    type: GET_USERS,
    payload: USERS,
  };
};

export const getPosts = (id) => {
  const POSTS = axios.get(`${GET_POSTS}?userId=${id}`);

  return {
    type: GET_POSTS_BY_ID,
    payload: POSTS,
  };
};
