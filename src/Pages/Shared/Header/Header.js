import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Header = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/ home">Genius Car Mechanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;