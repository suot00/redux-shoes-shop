import React from "react";
const ProductList = (data) => {
  return (
    <div>
      {data.data.id}
      {data.data.name}
      {data.data.price}
    </div>
  );
};

export default ProductList;
