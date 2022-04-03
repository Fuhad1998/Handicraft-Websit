
import React from "react";
import './Header.css'
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import UseAuth from "../../../Firebase/UseAuth";


const Header = () => {
  const {user, logOut} = UseAuth();
  return (
   
    <div>
      <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#"><Link className="header-title" to="/homes">Handicraft</Link></Navbar.Brand>
      {/* <Navbar.Brand href="#"><span className="web-name ">Handicraft</span></Navbar.Brand> */}
      <ul>
      <Link className="header-text home-text" to="/homes"> Home</Link>
      {
        user.email ? <button className="header-text "  onClick={logOut}>Logout</button>
        :
        <Link className="header-text text-align" to="/login">Login</Link>
      }
      
      
      </ul>
     
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
           <Link className="header-text" to="/explore">  All-Products</Link>
           <Link className="header-text" to="/order">  My-Order</Link>
           <Link className="header-text" to="/allOrders">All-Orders</Link>
           <Link className="header-text" to="/manageProduct">Manage-Product</Link>
           <Link className="header-text" to="/addProduct">Add-A-Product</Link>
          
          </Nav>
          
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    </div>
  );
};

export default Header;
