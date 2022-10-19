import React, { useState, useEffect } from "react";
import { Col, Row, Button, Divider } from "antd";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products, handleAddProduct, handleRemoveProduct }) => {
  const { productId } = useParams();
  const [counterItem, setCounterItem] = useState(1);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      {products
        .filter((prod) => prod.id === productId)
        .map((prod) => (
          <div className="full-card" key={prod.id}>
            <div
              className="product-detail"
              style={{ display: "flex", height: "100vh" }}
            >
              <div
                className="product-item"
                style={{ width: "70%", background: "#E1BAC5" }}
              >
                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    marginTop: "2em",
                    marginLeft: "2em",
                  }}
                >
                  {prod.name}
                </h2>
                <p style={{ marginLeft: "5.5em" }}>{prod.price}RWF</p>
                <div
                  style={{
                    width: "584px",
                    height: "456px",
                    margin: "0 auto",
                    marginTop: "-5em",
                  }}
                >
                  <img src={prod.imgUrl} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={require("../../../assets/img/Group 56.png")}
                    alt=""
                  />
                  <img
                    style={{ paddingLeft: "1em", paddingRight: "1em" }}
                    src={require("../../../assets/img/Group 55.png")}
                    alt=""
                  />
                  <img
                    style={{ paddingRight: "1em" }}
                    src={require("../../../assets/img/Group 53.png")}
                    alt=""
                  />
                  <img
                    src={require("../../../assets/img/Group 54.png")}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="product-choose"
                style={{ width: "30%", margin: "2em" }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "1em",
                  }}
                >
                  Description
                </h3>
                <p
                  style={{
                    marginBottom: "2em",
                    width: "368px",
                    height: "192px",
                    lineHeight: "24px",
                    fontSize: "16px",
                    fontWeight: "400px",
                  }}
                >
                  The Jordan Delta 2 offers a fresh, fearless take on the
                  features you want: durability, comfort and an attitude that's
                  Jordan to the core. We updated design lines and swapped out
                  some components. The 2 still has that clashing combination of
                  supportive and space age-like materials, with lots of
                  different textures and heavy stitching to create a look that's
                  both adventurous and iconic.
                </p>
                <Divider />
                <span>Select size</span>
                <Row style={{ marginTop: "1em" }}>
                  <Col span={4}>
                    <Button>35</Button>
                  </Col>
                  <Col span={4}>
                    <Button>36</Button>
                  </Col>
                  <Col span={4}>
                    <Button>37</Button>
                  </Col>
                  <Col span={4}>
                    <Button>38</Button>
                  </Col>
                  <Col span={4}>
                    <Button>39</Button>
                  </Col>
                </Row>
                <Row style={{ marginTop: "1em" }}>
                  <Col span={4}>
                    <Button>40</Button>
                  </Col>
                  <Col span={4}>
                    <Button>41</Button>
                  </Col>
                  <Col span={4}>
                    <Button>42</Button>
                  </Col>
                  <Col span={4}>
                    <Button>43</Button>
                  </Col>
                  <Col span={4}>
                    <Button>44</Button>
                  </Col>
                </Row>

                <div style={{ display: "flex", marginTop: "4em" }}>
                  <div>
                    <Button
                      style={{ border: "none" }}
                      onClick={() => handleRemoveProduct(prod)}
                    >
                      -
                    </Button>
                    <Button>{counterItem}</Button>
                    <Button style={{ border: "none", marginRight: "2em" }}>
                      +
                    </Button>
                  </div>
                  <Button
                    style={{ background: "#D90429", color: "#FFFFFF" }}
                    onClick={() => handleAddProduct(prod)}
                  >
                    Add to card
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductDetail;
