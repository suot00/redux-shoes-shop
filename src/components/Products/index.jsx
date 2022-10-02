import React from "react";
import {
  ProductContainer,
  CardProduct,
  ImageProduct,
} from "../../assets/style/styleProduct/index";
const Products = (data) => {
  return (
    <>
      <ProductContainer>
        <CardProduct>
          <ImageProduct>
            <img src={data.data.imgUrl} alt="" />
          </ImageProduct>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "26px",
              margin: "10px 0 10px 0",
            }}
          >
            {" "}
            {data.data.name}
          </h3>
          <p>{data.data.price}RWF</p>
        </CardProduct>
      </ProductContainer>
    </>
  );
};

export default Products;
