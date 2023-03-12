import axios from "axios";
import React, { createContext, useReducer } from "react";
import { ACTIONS, API, LIMIT } from "../helpers/consts";

export const productContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_PAGES:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  oneProduct: null,
  pageTotalCount: 1,
};

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getProducts() {
    const res = await axios(`${API}${window.location.search}`);
    const count = res.headers[["x-total-count"]];
    const pageTotalCount = Math.ceil(count / LIMIT);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: res.data,
    });
    dispatch({
      type: ACTIONS.GET_PAGES,
      payload: pageTotalCount,
    });
  }

  async function addProduct(newProduct) {
    await axios.post(`${API}`, newProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  }

  async function editProduct(id, newProduct) {
    await axios.patch(`${API}/${id}`, newProduct);
    getProducts();
  }

  // async function editProduct(id, newProduct){
  //   await
  // }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    pageTotalCount: state.pageTotalCount,
    getProducts: getProducts,
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    getOneProduct: getOneProduct,
    editProduct: editProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
