import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Logout() {
  let res = JSON.parse(localStorage.getItem('res'))
  let res2 = localStorage.getItem('res') !== null ? res : null

  function resetToken() {
    localStorage.removeItem("res");
  }

  return (
    <>
      <div style={{ display: "flex", top: "0rem", position: "absolute", right: "0%", zIndex: "1" }}>
        {
          res2
          ? <Link style={{ textDecoration: 'none' }} to='/accountPage'>
              <h6 style={{ textDecoration: 'none', color: "red", marginTop: "0.75rem", letterSpacing: "0px" }}>Olá, {res2 ? res2.data.user.email : ""}</h6>
            </Link>
          : null
        }
      
        <Navbar bg="" expand="lg" style={{ top: "-1vh" }}>
          <Container fluid style={{ width: "auto", backgroundColor: "white", marginRight: '0' }}>
            <Nav
              className="me-auto" style={{ textAlign: "right" }}
            >
              {
                res2
                ? <Nav.Link>
                  <Link style={{ textDecoration: 'none' }} to="/" onClick={resetToken} >Sair</Link>
                </Nav.Link>
                : <>
                  <Nav.Link>
                    <Link style={{ textDecoration: 'none' }} to='/signuplogin'>Cadastrar</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link style={{ textDecoration: 'none' }} to='/signuplogin'>Entrar</Link>
                  </Nav.Link>
                </>
              }
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}