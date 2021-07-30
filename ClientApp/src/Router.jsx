import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import LoginForm from "./components/Auth/LoginForm";
import Detail from "./components/Product/Detail";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/products/:id" exact component={Detail} />
    </Switch>
  );
};

export default Router;
