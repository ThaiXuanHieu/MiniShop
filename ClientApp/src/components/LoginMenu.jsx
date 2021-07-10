import React from "react";
import { NavDropdown } from "react-bootstrap";
const LoginMenu = () => {
  return (
    <>
      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/">Order</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default LoginMenu;
