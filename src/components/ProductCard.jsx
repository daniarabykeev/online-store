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

function ProductCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { deleteProduct } = useContext(productContext);
  return (
    <Card sx={{ maxWidth: 345, margin: "30px auto" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon
              onClick={(e) => {
                navigate(`/edit/${item.id}`);
              }}
            />
            {/* <button>edit</button> */}
          </IconButton>
        }
        title={item.title}
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
          <FavoriteIcon />
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
    </Card>
  );
}

export default ProductCard;
