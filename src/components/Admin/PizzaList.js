import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../../actions/PizzaAction";
import Loader from "../Loader";
import Error from "../Error";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const PizzaList = () => {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzaReducer);

  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas</Error>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => (
                <tr>
                  <td>
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      width="100px"
                      height="80px"
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    Small : {pizza.prices[0]["small"]}
                    <br /> Medium : {pizza.prices[0]["medium"]} <br />
                    Large : {pizza.prices[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                      <AiFillEdit style={{ cursor: "pointer" }} />
                    </Link>
                    &nbsp;{" "}
                    <AiFillDelete
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => {
                        dispatch(deletePizza(pizza._id));
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PizzaList;
