import axios from "axios";
import * as proAction from "../Constants/ProductConst";

export const getProducts =
  (keyWord = "", currPage = 1, price = [0, 2000], category) =>
  async (dispatch) => {
    try {
      dispatch({ type: proAction.ALL_PRODUCT_REQUEST });
      let link = `http://localhost:4007/api/v1/products?keyword=${keyWord}&page=${currPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
      if (category) {
        link = `http://localhost:4007/api/v1/products?keyword=${keyWord}&page=${currPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
      }
      const { data } = await axios.get(link);
      console.log("filter data ", data);
      dispatch({
        type: proAction.ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: proAction.ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//single product actions

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: proAction.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4007/api/v1/product/${id}`
    );
    dispatch({
      type: proAction.PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: proAction.PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: proAction.CLEAR_ERRORS });
};
