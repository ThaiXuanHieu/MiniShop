import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
};

export default Router;
