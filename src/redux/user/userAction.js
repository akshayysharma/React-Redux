import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userType";
import Axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Res) => {
        const users = Res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUserFailure(error));
      });
  };
};
