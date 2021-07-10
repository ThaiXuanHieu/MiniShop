import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Router from "./Router";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <Router />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
};

export default App;
