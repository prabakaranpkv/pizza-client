import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/CartAction";
import swal from "sweetalert";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
    swal({ icon: "success" });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "200px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Size</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((val, ind) => (
                    <option value={ind + 1}>{ind + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              Price : ₹{" "}
              <span style={{ fontWeight: 600 }}>
                {pizza.prices[0][varient] * quantity}
              </span>
            </Col>
            <Col md={6}>
              <Button
                onClick={addToCartHandler}
                className="bg-primary text-white"
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "200px", cursor: "pointer" }}
            />
          </div>
          <div>
            <h5>Description : </h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
