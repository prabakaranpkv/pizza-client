import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/CartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  const login = () => {
    window.location.href = "/login";
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} ({item.varient})
                    </h5>
                    <h6>
                      Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity : &nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                      &nbsp;
                      {item.quantity}&nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "50px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment</h1>
            <h4>Sub Total</h4>
            <h4> ₹ {subTotal}</h4>
            {currentUser ? (
              <Checkout subTotal={subTotal} />
            ) : (
              <Button onClick={login}>
                You have Login to Place the Order{" "}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
