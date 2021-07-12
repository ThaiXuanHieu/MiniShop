import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Router from "./Router";
import "./App.css";
import NavMenu from "./components/shared/NavMenu";
import { Container } from "@material-ui/core";
const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <Container>
            <NavMenu />
            <Router />
          </Container>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
};

export default App;
