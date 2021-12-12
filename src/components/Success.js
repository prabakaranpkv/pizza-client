import React from "react";
import { Alert } from "react-bootstrap";

const Success = ({ success }) => {
  return <Alert variant="primary">{success}</Alert>;
};

export default Success;
