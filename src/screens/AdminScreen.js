import React, { useEffect } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import EditPizza from "../components/Admin/EditPizza";
import OrderList from "../components/Admin/OrderList";
import PizzaList from "../components/Admin/PizzaList";
import UserList from "../components/Admin/UserList";

const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser.isAdmin]);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route exact path="/admin" component={UserList} />
              <Route exact path="/admin/userlist" component={UserList} />
              <Route
                exact
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
              />

              <Route exact path="/admin/pizzalist" component={PizzaList} />
              <Route exact path="/admin/addnewpizza" component={AddNewPizza} />
              <Route exact path="/admin/orderlist" component={OrderList} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
