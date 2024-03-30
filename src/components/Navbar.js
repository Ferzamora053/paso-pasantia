import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../CSS/Navbar.css";

function NavbarC() {
    return (
        <Navbar expand="sm" sticky="top" className="bg-custom navbar-custom">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="mb-0" id="brand-link">
                    <img src="logo.png" alt="Logo" className="logo" />Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mb-0 ms-auto">
                        <Nav.Link as={Link} to="/login" id="NavLink">Iniciar Sesión</Nav.Link>
                        <Nav.Link as={Link} to="/register" id="NavLink">Registrarse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarC;