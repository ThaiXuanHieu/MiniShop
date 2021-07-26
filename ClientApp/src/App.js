import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import { Layout } from "./components/shared/Layout";

const Main = () => {
  return (
    <BrowserRouter>
      <Route component={Layout}/>
    </BrowserRouter>
  )
}
const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.Fragment>
  );
};

export default App;
