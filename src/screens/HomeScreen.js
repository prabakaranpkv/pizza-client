import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/PizzaAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzaReducer);

  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Error while fetching pizzas" />
        ) : (
          <Row>
            <Filters />
            {pizzas.map((pizza) => (
              <Col md={6} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
