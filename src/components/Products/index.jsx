import React from "react";
import { ImageProduct } from "../../assets/style/styleProduct/index.js";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "antd";
import { Checkbox } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
const Products = ({ products }) => {
  return (
    <div style={{ display: "flex", width: "100%", marginLeft: "2em" }}>
      <div style={{ width: "30%" }}>
        <h2 style={{ marginTop: "1em", marginBottom: "2em" }}>Brand</h2>
        <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
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
        <Row style={{ marginTop: "1em" }}>
          <Col span={3}>
            <Button>35</Button>
          </Col>
          <Col span={3}>
            <Button>36</Button>
          </Col>
          <Col span={3}>
            <Button>37</Button>
          </Col>
          <Col span={3}>
            <Button>38</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: "1em" }}>
          <Col span={3}>
            <Button>40</Button>
          </Col>
          <Col span={3}>
            <Button>41</Button>
          </Col>
          <Col span={3}>
            <Button>42</Button>
          </Col>
          <Col span={3}>
            <Button>43</Button>
          </Col>
        </Row>
      </div>
      <div style={{ width: "70%" }}>
        <h2 style={{ marginTop: "1em", marginBottom: "1 em" }}>
          The new arrivals
        </h2>
        <Row gutter={16}>
          {products.map((product, index) => {
            const listProduct = (
              <>
                <Col
                  className="gutter-row"
                  span={4}
                  style={{ margin: "0 10em 0 1em" }}
                  key={index}
                >
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
              </>
            );
            return listProduct;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Products;
