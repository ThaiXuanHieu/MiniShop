import React from "react";
import { useSelector } from "react-redux";
import Router from "../../Router";
import NavMenu from "./NavMenu";
import { Container } from "@material-ui/core";
import Alert from "./Alert";
import { selectAlert } from "../../store/app-slice";
export const Layout = () => {
  const alert = useSelector(selectAlert);
  return (
    <Container>
      <NavMenu />
      <Router />
      <Alert open={alert.open} message={alert.message} level={alert.level} />
    </Container>
  );
};
