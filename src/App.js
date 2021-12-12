import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <Router>
      <Topbar />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/orders" component={OrderScreen} />
        <Route path="/admin" component={AdminScreen} />
      </Switch>
    </Router>
  );
}

export default App;
