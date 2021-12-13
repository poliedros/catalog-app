import React from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

/*const NavBar = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/log">
          Log
        </Route>
      </Switch>
      NavBar Component
    </div>
  </Router>
);*/

export default function NavBar() {
  return <Navbar bg="" expand="lg" /*sticky="top"*/ style={{ top: "1vh", position: "fixed", width: "100%", alignItems: "center" }}>
  <Container fluid style={{ width: "auto", justifyContent: "center", backgroundColor: "white"}}>
    {/*<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>*/}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link>
          <Link to="/">Início</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/signuplogin'>Cadastrar</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='account-page'>Entrar</Link>
        </Nav.Link>

        {/*<NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>*/}
      </Nav>
      {/*<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>*/}
    </Navbar.Collapse>
  </Container>
</Navbar>
  /*<nav className="navbar">
          <div className="links">
            <Link to="/catalog-app">Início</Link>
            <a href="/signuplogin#signup">Cadastrar</a>
            <a href="/signuplogin#login">Entrar</a>
          </div>
        </nav>*/
}

NavBar.propTypes = {};

NavBar.defaultProps = {};
