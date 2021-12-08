import React from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css';

//import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar() {
  return <Navbar bg="" expand="lg" style={{ top: "1vh", position: "fixed", width: "100%", alignItems: "center" }}>
  <Container fluid style={{ width: "auto", justifyContent: "center", backgroundColor: "white"}}>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/catalog-app">Início</Nav.Link>
        <Nav.Link href="/signuplogin#signup">Cadastrar</Nav.Link>
        <Nav.Link href="/signuplogin#login">Entrar</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

/*<nav className="navbar">
          <div className="links">
            <Link to="/catalog-app">Início</Link>
            <a href="/signuplogin#signup">Cadastrar</a>
            <a href="/signuplogin#login">Entrar</a>
          </div>
        </nav>*/