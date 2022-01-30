
import React from "react";
import './Header.css'
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   
    <div>
      <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#">Handicraft</Navbar.Brand>
      <Link className="header-text" to="/homes">Home</Link>
      <Link className="header-text text-align" to="/login">Login</Link>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
      >
        <Offcanvas.Header closeButton className="bg-light">
          <Offcanvas.Title id="offcanvasNavbarLabel">Close</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-light">
          <Nav className="justify-content-end flex-grow-1  pe-3">
           <Link className="header-text" to="/explore">All-Products</Link>
           <Link className="header-text" to="/order">My-Order</Link>
           <Link className="header-text" to="/allOrders">All-Orders</Link>
           <Link className="header-text" to="/manageProduct">Manage-Product</Link>
          
          </Nav>
          
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    </div>
  );
};

export default Header;
