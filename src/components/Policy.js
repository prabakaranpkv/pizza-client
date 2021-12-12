import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>TERMS</h1>
        <Row>
          <Col md={10}>
            <h6>CONSENT</h6>
            <p>
              By using this site, you agree to the terms of this Privacy Policy.
              Whenever you submit information via this site, you consent to the
              collection, use and disclosure of the information in accordance
              with this Privacy Policy.
            </p>
            <h6>ACCESS, ACCURACY AND SECURITY</h6>
            <p>
              Pizza Shop will take reasonable steps to ensure that the personal
              information collected is accurate, complete and up-to-date. You
              can access and request correction of any personal information
              concerning you at any time. You may also request that your
              personal information be deleted at any time. Any such requests
              should be made directly by contacting us.Pizza Shop will take
              reasonable steps to protect personal information from misuse, loss
              and unauthorized access, modification or disclosure.
            </p>
            <h6>SENSITIVE INFORMATION</h6>
            <p>
              Pizza Shop will not collect, use or disclose sensitive information
              except with your specific consent.
            </p>
            <h6>COOKIES</h6>
            <p>
              A Cookie is a piece of information that our web server may send to
              your machine when you visit a Pizza Shop site. A Cookie helps us
              to recognize you when you re-visit our sites and to co-ordinate
              your access to different pages on the sites. For example, once you
              have placed a new pizza order you may be offered the opportunity
              to personalize your order so that the system remembers it for
              future use. A cookie will be set on your machine that enables us
              to recognize your computer when you return to order your favorite
              pizza next time. With most Internet Browsers, you can erase
              Cookies from your computer hard drive, block all Cookies, or
              receive a warning before a Cookie is stored. If you want to do
              this, refer to your Browser instructions or help screen to learn
              more. If you disable all cookies, you may not be able to take
              advantage of all the features of our sites.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
