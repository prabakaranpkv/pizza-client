import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/UserAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, success, loading } = loginState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
    validationSchema: formSchema,
  });

  // const loginHandler = () => {
  //   const user = { email, password };
  //   dispatch(loginUser(user));
  // };

  return (
    <>
      <Container>
        <h1>Login</h1>
        <hr />
        {loading && <Loader />}
        {success && <Success success="User Login Successfully" />}
        {error && <Error error="Something Went Wrong" />}
        <form onSubmit={formik.handleSubmit}>
          <input
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            className="form-control  mb-2"
            type="email"
            placeholder="E-mail address"
          />

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

          <div className="text-danger mb-2">
            {formik.touched.password && formik.errors.password}
          </div>

          <div>
            <button type="submit" className="btn btn-primary py-2 w-50 mb-4">
              Login
            </button>
          </div>
        </form>

        <div>
          <h5>User Email Id & Password for Demo</h5>
          <div>
            <p>E-mail : user@gmail.com</p>
            <p>password : 12345 </p>
          </div>
          <h5>Admin</h5>
          <p>E-mail : admin@gmail.com</p>
          <p>password : 12345 </p>
        </div>

        {/* <Form>
          <h1>Login</h1>
          <hr />
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
              placeholder="Enter email"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
        </Form> */}
      </Container>
    </>
  );
};

export default Login;
