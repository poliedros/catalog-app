import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import PropTypes from 'prop-types';


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
  return <nav className="navbar">
          <div className="links">
            <Link to="/catalog-app">Início</Link>
            <a href="/signuplogin#signup">Cadastrar</a>
            <a href="/signuplogin#login">Entrar</a>
          </div>
        </nav>
}

NavBar.propTypes = {};

NavBar.defaultProps = {};