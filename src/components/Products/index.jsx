import React, { useState, useEffect } from "react";
import {
  ProductContainer,
  CardProduct,
  ImageProduct,
} from "../../assets/style/styleProduct/index";
import { Col, Row, Button } from "antd";
const Products = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "30%", backgroundColor: "pink" }}>
        <h2>Brand</h2>
        <h2>Size</h2>
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
      <div style={{ width: "70%", backgroundColor: "cyan" }}>
        <h2>The new arrivals</h2>
      </div>
    </div>
  );
};

export default Products;
