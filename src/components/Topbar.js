import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Topbar = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container fluid>
          <img
            src="http://www.pngall.com/wp-content/uploads/2016/05/Pizza-Free-PNG-Image.png"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          &nbsp;&nbsp;
          <h1
            style={{
              fontWeight: 700,
              color: "white",
              textShadow: "0 0 10px #FFFFFF",
            }}
          >
            Pizza Shop
          </h1>
          <h6 className="text-light">
            &nbsp; Yummy pizza delivered fast & fresh
          </h6>
          &nbsp;&nbsp;&nbsp;
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName>
              <Nav.Link>terms and policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
