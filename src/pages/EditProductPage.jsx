import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

const init = {
  title: "",
  price: "",
  image1: "",
  image2: "",
  image3: "",
  description1: "",
  description2: "",
};

function EditProductPage() {
  const { oneProduct, getOneProduct, editProduct } = useContext(productContext);
  const [product, setProduct] = useState(init);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
    setProduct(init);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }
  return (
    //! нужно стилизовать страницу
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="title"
          name="title"
          value={product.title}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="price"
          name="price"
          value={product.price}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image1"
          name="image1"
          value={product.image1}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image2"
          name="image2"
          value={product.image2}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image3"
          name="image3"
          value={product.image3}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="description1"
          name="description1"
          value={product.description1}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="description2"
          name="description2"
          value={product.description2}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
