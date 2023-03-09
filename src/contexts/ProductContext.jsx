import React, { createContext } from "react";

export const productContext = createContext();

function ProductContext({ children }) {
  const value = {};
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
