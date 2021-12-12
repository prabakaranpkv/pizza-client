import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/OrderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something went Wrong" />}
      {success && <Success success="order placed successfully" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51K1A8ySDf0IVOvSMv9yYjRV6EwaQUVKUrk8slxOc2ybZqQ7bKMrnEev69oc4cPMsypPynsEK3LyipZAG2ipOUPHn00C36TxyBc"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
