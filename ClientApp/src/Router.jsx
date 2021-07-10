import React from "react";
import { Route, Switch } from "react-router-dom";
import NavMenu from "./components/shared/NavMenu";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={NavMenu} />
    </Switch>
  );
};

export default Router;
