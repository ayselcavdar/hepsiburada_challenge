import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/Cart";

const App = () => {
 const location = useLocation()
  return (
    <div className="app-container">
     <Navbar location={location}/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </div>
  );
};

export default App;
