import React from "react";
import "../App.css";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Shop</h1>
            <p>
              Order a delicious pizza on the go, anywhere, anytime. Pizza shop
              is happy to assist you with your home delivery. Every time you
              order, you get a hot and fresh pizza delivered at your doorstep in
              less than thirty minutes.
            </p>

            <Table hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-info text-center text-white" colSpan={4}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaFacebook className="text-primary" />
                  </td>
                  <td>
                    <FaTwitter className="text-primary" />
                  </td>
                  <td>
                    <FaInstagram className="text-danger" />
                  </td>
                  <td>
                    <FaYoutube className="text-danger" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/farmers-pick.fcd8cacee43fb94e173e5f04fdf2c2b5.1.jpg"
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
