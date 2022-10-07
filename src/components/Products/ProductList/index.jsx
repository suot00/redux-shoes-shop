import React, { useEffect } from "react";
import {
  ProductContainer,
  CardProduct,
  ImageProduct,
} from "../../../assets/style/styleProduct/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productAction";
const ProductList = () => {
  const dispatch = useDispatch();
  const productsListData = useSelector((state) => state.productsList);
  const { loading, error, products } = productsListData;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <>
        {loading
          ? "Loading..."
          : error
          ? error.message
          : products.map((p) => <h3>{p.name}</h3>)}
      </>
      {/* <ProductContainer>
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
      </ProductContainer> */}
    </>
  );
};

export default ProductList;
