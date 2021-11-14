import React from 'react';
import Navbar from  'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


const NavBar = () => {

   return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">ReactApp</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href='/profile'>Profile </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;