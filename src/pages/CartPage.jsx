import React, { useContext, useEffect } from "react";
import { cartContext } from "../contexts/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";

function CartPage() {
  const { cart, getCart, deleteFromCart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sub Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">
                <img src={item.image1} alt="" style={{ width: "50px" }} />
              </TableCell>
              <TableCell align="right">
                <button
                  onClick={(e) => {
                    deleteFromCart(item.id);
                  }}
                >
                  x
                </button>
              </TableCell>
              <TableCell align="right">{item.category}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.subPrice}</TableCell>
              <TableCell align="right">
                <Button
                //   onClick={() => {
                //     addQuantity(item.id);
                //   }}
                >
                  +
                </Button>{" "}
                <Typography component="span" variant="h6">
                  {item.count}
                </Typography>{" "}
                <Button
                //   onClick={() => {
                //     if (item.count === 1) {
                //       deleteFromCart(item.id);
                //     } else {
                //       minQuantity(item.id);
                //     }
                //   }}
                >
                  -
                </Button>
              </TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
          {/* <Typography variant="h4">Total price: {cart.totalPrice}</Typography> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartPage;
