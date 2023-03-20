import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart, items, products }) => {
  let token=localStorage.getItem("token");
  return (
    <Card className="card" >
       
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"600"}}>
          ${product.cost}
          </Typography>
          <Rating name="read-only" value={product.rating} readOnly />
        </CardContent>
      
      <CardActions>
        <Button className="button" variant="contained" startIcon={<AddShoppingCartOutlined/>} onClick={()=>handleAddToCart(token,items,products,product._id,1, {preventDuplicate: true} )} sx={{width:"100%"}}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
