import axios from "axios";
import React, { createContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";

export const productContext = createContext();

const initialState = {
  products: [],
  oneProduct: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getProducts() {
    const { data } = await axios(API);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  }

  async function addProduct(newProduct) {
    await axios.post(`${API}`, newProduct);
    getProducts();
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    getProducts: getProducts,
    addProduct: addProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
