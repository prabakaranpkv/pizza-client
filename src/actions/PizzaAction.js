import axios from "axios";
import baseURL from "../baseURL";
import swal from "sweetalert";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get(`${baseURL}/pizzas/getAllPizzas`);
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    const res = await axios.post(`${baseURL}/pizzas/addpizza`, {
      pizza,
    });
    dispatch({ type: "ADD_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: error });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post(`${baseURL}/pizzas/getpizzabyid`, {
      pizzaId,
    });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: error });
  }
};

export const updatePizza = (updatedpizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post(`${baseURL}/pizzas/updatepizza`, {
      updatedpizza,
    });
    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: res.data });
    window.location.href = "/admin/pizzalist";
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: error });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseURL}/pizzas/deletepizza`, {
      pizzaId,
    });
    swal("Deleted", "Successfully", "success");
    window.location.href = "/admin/pizzalist";
    console.log(res);
  } catch (error) {
    swal("Error", "While Deleting Pizza", "error");
  }
};

export const filterPizza = (searchkey, category) => async (dispatch) => {
  let filterdPizza;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get(`${baseURL}/pizzas/getAllPizzas`);
    filterdPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};
