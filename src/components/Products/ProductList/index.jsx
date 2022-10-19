import React from "react";
import {
  ProductContainer,
  CardProduct,
  ImageProduct,
} from "../../../assets/style/styleProduct/index.js";
import { Link } from "react-router-dom";
const ProductList = ({ product }) => {
  console.log(product);
  return (
    <>
      <ProductContainer>
        <CardProduct>
          <ImageProduct>
            <img src={product.imgUrl} alt="" />
          </ImageProduct>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "26px",
              margin: "10px 0 10px 0",
            }}
          >
            <Link to={`/products/${product.id}`}> {product.name}</Link>
          </h3>
          <p>{product.price}RWF</p>
        </CardProduct>
      </ProductContainer>
    </>
  );
};

export default ProductList;
