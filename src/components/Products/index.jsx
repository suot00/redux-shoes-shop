import React, { useState, useEffect } from "react";
import { ImageProduct } from "../../assets/style/styleProduct/index.js";
import { Link } from "react-router-dom";
import { Col, Row, Checkbox, Radio } from "antd";

const Products = ({ products }) => {
  // const productData = products;
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterProducts, setFilterProduct] = useState([]);
  const [valueBrand, setValueBrand] = useState("All");
  const [valueSize, setValueSize] = useState("All");

  useEffect(() => {
    setFilterProduct(products);
    // const oldProducts = [...products];
    // const filteredAllProducts = oldProducts.filter((product) => {
    //   if (valueBrand === "All" || valueSize === "All") return product;

    //   return product;
    // });
    // setFilteredProducts(filteredAllProducts);
  });

  const onChangeBrand = (e) => {
    // console.log(e);
    setValueBrand(e);
  };
  const onChangeSize = (e) => {
    setValueSize(e.target.value);
    // console.log(e.target.value);
  };

  // console.log(filterData);

  return (
    <div style={{ display: "flex", width: "100%", marginLeft: "2em" }}>
      <div style={{ width: "30%" }}>
        <h2 style={{ marginTop: "1em", marginBottom: "2em" }}>Brand</h2>
        <Checkbox.Group style={{ width: "100%" }} onChange={onChangeBrand}>
          <Row>
            <Col span={24}>
              <Checkbox value="Nike">Nike</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Jordan">Jordan</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Adidas">Adidas</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Fila">Fila</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Gucci">Gucci</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Balenciaga">Balenciaga</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <h2 style={{ margin: "2em 0 1em 0" }}>Size</h2>
        <Radio.Group style={{ marginTop: "1em" }} onChange={onChangeSize}>
          <Row>
            <Col span={8}>
              <Radio.Button value="35">35</Radio.Button>
            </Col>
            <Col span={8}>
              <Radio.Button value="36">36</Radio.Button>
            </Col>
            <Col span={8}>
              <Radio.Button value="37">37</Radio.Button>
            </Col>
            <Col span={8}>
              <Radio.Button value="38" style={{ marginTop: "1em" }}>
                38
              </Radio.Button>
            </Col>
          </Row>
        </Radio.Group>
      </div>
      <div style={{ width: "70%" }}>
        <h2 style={{ marginTop: "1em", marginBottom: "1 em" }}>
          The new arrivals
        </h2>
        <Row gutter={16}>
          {filterProducts
            .filter((filterProduct) => {
              return (
                filterProduct.size === valueSize ||
                filterProduct.name.includes(valueBrand)
              );
            })
            .map((filterProduct) => {
              return (
                <div key={filterProduct.id}>
                  <Col className="gutter-row" span={4}>
                    <div>
                      <ImageProduct>
                        <img src={filterProduct.imgUrl} alt="" />
                      </ImageProduct>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          lineHeight: "26px",
                          margin: "10px 0 10px 0",
                          width: "200px",
                        }}
                      >
                        <Link to={`/products/${filterProduct.id}`}>
                          {" "}
                          {filterProduct.name}
                        </Link>
                      </h3>
                      <p>{filterProduct.price}RWF</p>
                    </div>
                  </Col>
                </div>
              );
            })}
          {filterProducts.length === 0 && <span>No products found</span>}
          {/* {products.map((product, index) => {
            const listProduct = (
              <div key={index}>
                <Col className="gutter-row" span={4}>
                  <div>
                    <ImageProduct>
                      <img src={product.imgUrl} alt="" />
                    </ImageProduct>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        lineHeight: "26px",
                        margin: "10px 0 10px 0",
                        width: "200px",
                      }}
                    >
                      <Link to={`/products/${product.id}`}>
                        {" "}
                        {product.name}
                      </Link>
                    </h3>
                    <p>{product.price}RWF</p>
                  </div>
                </Col>
              </div>
            );
            return listProduct;
          })} */}
        </Row>
      </div>
    </div>
  );
};

export default Products;
