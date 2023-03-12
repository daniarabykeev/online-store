import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";

export const cartContext = createContext();

const init = {
  cart: {
    products: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

function getDataFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      products: [],
    };
  }
  return data;
}

function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, init);

  function getCart() {
    let data = getDataFromLocalStorage();
    dispatch({
      type: ACTIONS.GET_CART,
      payload: data,
    });
  }

  function addProductToCart(product) {
    const data = getDataFromLocalStorage();
    data.products.push({ ...product, count: 1 });
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function deleteFromCart(id) {
    const data = getDataFromLocalStorage();
    data.products = data.products.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  const value = {
    cart: state.cart,
    getCart: getCart,
    addProductToCart: addProductToCart,
    deleteFromCart: deleteFromCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export default CartContext;
