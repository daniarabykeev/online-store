import React, { useContext } from "react";
import { productContext } from "../contexts/ProductContext";

function AddProductPage() {
  const { addProduct } = useContext(productContext);
  return (
    <div style={{ marginLeft: "50px", marginTop: "50px" }}>AddProductPage</div>
  );
}

export default AddProductPage;
