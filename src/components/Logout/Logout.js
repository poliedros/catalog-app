import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export default function Logout() {
  function resetToken(){
      localStorage.removeItem("res");
  }
  return (
  <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/catalog-app" onClick={resetToken}>Sair</Nav.Link>
                </Nav>
        </Container>
  </Navbar>
  )
}