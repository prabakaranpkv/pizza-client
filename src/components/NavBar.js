import React from "react";
import { Container, Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/UserAction";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="https://4.bp.blogspot.com/-09aYdQryvzo/WNMHHjjIVyI/AAAAAAAAE5M/J4fvwe1AREsTfYgRmgrpuxxcXqh_XUH2QCLcB/s1600/3d-pizza-text-logo-effect-created-online.jpg"
              alt="logo"
              style={{ height: "50px", width: "200px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart style={{ color: "green" }} /> Cart (
                  {cartState.cartItems.length})
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/admin">
                {currentUser && currentUser.isAdmin ? (
                  <Nav.Link>Admin</Nav.Link>
                ) : (
                  <Nav.Link disabled>Admin</Nav.Link>
                )}
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
