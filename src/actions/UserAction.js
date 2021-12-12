import axios from "axios";
import baseURL from "../baseURL";
import swal from "sweetalert";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post(`${baseURL}/users/register`, user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post(`${baseURL}/users/login`, user);
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const res = await axios.get(`${baseURL}/users/getallusers`);
    console.log(res.data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAIL", payload: error });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseURL}/users/deleteuser`, {
      userid,
    });
    swal("Deleted", "Successfully", "success");
    window.location.reload();
    console.log(res);
  } catch (error) {
    swal("Error", "While Deleting User", "error");
  }
};
