import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import Brand from "../Brand";
import Container from "@material-ui/core/Container";
import SearchBox from "./SearchBox";
import LoginMenu from "../LoginMenu";
import Cart from "../Cart";
import Category from "../Category";

const NavMenu = (props) => {
  return (
    <Container>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="/">Mini Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex align-items-center justify-content-center">
            <Brand />
            <Category />
            <SearchBox />
            <Cart />
          </Nav>
          <Form inline>
            <LoginMenu />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
