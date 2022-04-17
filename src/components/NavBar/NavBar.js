import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar() {

  return <Navbar bg="" expand="lg" style={{ top: "1vh", position: "fixed", top: "0",
  left: "0",
  right: "0",
  height: "0", alignItems: "center", flexWrap: "wrap" }}>
  <Container fluid style={{ display: "inline-block",
    textAlign: "left", width: "auto", justifyContent: "center", backgroundColor: "white"}}>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link>
          <Link style={{ textDecoration: 'none' }} to="/" onClick={() => window.scrollTo(0, 0)}>Início</Link>
        </Nav.Link>
        <Nav.Link>
          <Link style={{ textDecoration: 'none' }} to="/">Pagar com Código</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

NavBar.propTypes = {};

NavBar.defaultProps = {};