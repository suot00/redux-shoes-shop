import { GET_PRODUCTS, PRODUCTS_ERROR } from "../types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};
