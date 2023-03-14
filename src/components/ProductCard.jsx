import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ExpandMore } from "@mui/icons-material";
import { productContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import ModalDetails from "./ModalDetails";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../contexts/CartContext";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = "primary-product-settings-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <ModalDetails item={item} />
      </MenuItem>
      {/* <button>
        <ModalDetails />
      </button> */}
      <MenuItem onClick={(e) => navigate(`/edit/${item.id}`)}>
        Edit product
      </MenuItem>
    </Menu>
  );
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { deleteProduct } = useContext(productContext);
  const { cart, getCart, addProductToCart } = useContext(cartContext);
  return (
    <Card sx={{ maxWidth: 345, margin: "30px auto" }}>
      <CardHeader
        action={
          <IconButton
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            aria-label="settings"
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title.slice(0, 20)}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          $ {item.price}
        </Typography>
        <Typography
          variant="h5"
          color="text.primary"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {item.description1}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites">
          <AddShoppingCartIcon
            onClick={() => {
              addProductToCart(item);
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => {
            deleteProduct(item.id);
          }}
          aria-label="share"
        >
          <DeleteForeverIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{item.description2}</Typography>
        </CardContent>
      </Collapse>
      {renderMenu}
    </Card>
  );
}

export default ProductCard;
