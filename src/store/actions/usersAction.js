import { Services } from '../../api/services';
import TYPES from "../types";

// asynchronously dispatch action
export const users = (onError) => {
  return async (dispatch) => {
    const server = new Services();
    server
      .getUsers()
      .then(res => {
        dispatch({
          type: TYPES.USERS,
          payload: res.entity
        });
      })
      .catch(error => onError(error));
  };
};

// update users
export const updateUsers = (new_data, onSuccess) => {
  return async (dispatch) => {
      dispatch({
        type: TYPES.UPDATE_USER,
        payload: new_data,
      });
      
      // return true anyway since we are updating locally
      onSuccess(true);
  };
};

// delete user
export const deleteUsers = (user_id) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.DELETE_USER,
      payload: user_id,
    });
  };
};