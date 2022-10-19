import React from "react";
import { Col, Row, Divider, Button } from "antd";

const index = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearAll,
}) => {
  const subTotal = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div
      style={{
        margin: "2em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Your shopping cart</h2>

      {cartItems.length === 0 && <span>No items are added</span>}

      <Row>
        <Col span={18}>
          {cartItems.map((item) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                width: "880px",
                height: "128px",
                background: "rgba(0, 0, 0, 0.04)",
                margin: "0 0 1em 0",
              }}
              key={item.id}
            >
              <div
                style={{
                  width: "5em",
                  height: "80px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  margin: "1.5em",
                }}
              >
                <img
                  style={{ width: "72px", height: "64px" }}
                  src={item.imgUrl}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ margin: "0 15em 0 0" }}>
                  <h2 style={{ fontWeight: "bold" }}>{item.name}</h2>
                  <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                    {item.price}RWF
                  </span>
                </div>
                <div style={{ margin: "0 15em 0 0" }}>
                  <Button
                    style={{ border: "none" }}
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </Button>
                  <Button>{item.quantity}</Button>
                  <Button
                    style={{ border: "none", marginRight: "2em" }}
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </Button>
                </div>
                <span style={{ fontWeight: "bold" }}>{item.price}RWF</span>
              </div>
            </div>
          ))}
          {/* <span>Clear All</span> */}
        </Col>
        <Col span={6}>
          <h2>Order summary</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2em 0 1em 0",
            }}
          >
            <span>Sub total</span>
            <span> {subTotal} RWF</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Delivery fee</span>0 RWF
          </div>
          <Divider />
          <div>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              {subTotal} RWF
            </span>

            <Button
              style={{
                background: "#D90429",
                color: "#FFFFFF",
                margin: "2em 0 0 0",
              }}
            >
              Proceed to checkout
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
