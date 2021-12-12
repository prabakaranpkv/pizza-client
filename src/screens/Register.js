import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/UserAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required"),
});

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const dispatch = useDispatch();

  // const registerHandler = () => {
  //   if (password !== confirmPassword) {
  //     alert("Password do not match");
  //   } else {
  //     const user = { name, email, password, confirmPassword };
  //     dispatch(registerUser(user));
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    if (success) {
      window.location.href = "/login";
    }
  }, [success]);

  return (
    <>
      <Container>
        <h1>Registration</h1>
        <hr />
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="Something Went Wrong" />}
        <form onSubmit={formik.handleSubmit}>
          <input
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            className="form-control mb-2"
            type="text"
            placeholder="Name"
          />
          {/* Err */}
          <div className="text-danger mb-2">
            {formik.touched.name && formik.errors.name}
          </div>

          <input
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            className="form-control mb-2"
            type="email"
            placeholder="Email"
          />
          {/* Err */}
          <div className="text-danger mb-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <input
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            className="form-control mb-2"
            type="password"
            placeholder="Password"
          />
          {/* Err */}
          <div className="text-danger mb-2">
            {formik.touched.password && formik.errors.password}
          </div>

          <button type="submit" className="btn btn-primary py-2 w-50 mb-4">
            Register
          </button>
        </form>

        {/* <Form>
          <h1>Registration</h1>
          <hr />
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#4285F4",
              }}
            >
              Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#4285F4",
              }}
            >
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#4285F4",
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#4285F4",
              }}
            >
              Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={registerHandler}>
            Register
          </Button>
        </Form> */}
      </Container>
    </>
  );
};

export default Register;
