import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { productContext } from "../contexts/ProductContext";
import CloseIcon from "@mui/icons-material/Close";
import "./HomePage.css";
import ProductCard from "../components/ProductCard";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const init = {
  title: "",
  price: "",
  image1: "",
  image2: "",
  image3: "",
  description1: "",
  description2: "",
};

function HomePage() {
  function handleOpen(e) {
    document.getElementById("my-modal").classList.add("open");
  }
  function handleClose(e) {
    document.getElementById("my-modal").classList.remove("open");
  }
  const { products, getProducts, addProduct, deleteProduct } =
    useContext(productContext);
  const [product, setProduct] = useState(init);

  function handleSubmit(e) {
    e.preventDefault();
    addProduct(product);
    setProduct(init);
    handleClose();
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ marginLeft: "30px", marginTop: "30px" }}>
      <button
        onClick={(e) => {
          handleOpen(e);
        }}
      >
        Add products
      </button>
      <div style={{ display: "flex" }}>
        <div className="modal" id="my-modal">
          <div className="modal__box">
            <IconButton
              className="modal__close-btn"
              onClick={(e) => {
                handleClose(e);
              }}
            >
              <CloseIcon />
            </IconButton>
            <form
              action=""
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              {/* <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        // label="required"
                        defaultValue="Hello World"
                        name="title"
                        value={item.title}
                      />
                    </div>
                  </Box> */}
              <div>
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
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button>Add</button>
              </div>
            </form>
          </div>
        </div>

        {products.map((item) => {
          return (
            <div key={item.id} style={{ marginRight: "30px" }}>
              <ProductCard key={item.id} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
