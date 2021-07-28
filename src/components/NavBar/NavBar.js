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
            <Link to="/">Início</Link>
            <Link to="/signup">Cadastrar</Link>
            <Link to="/login">Entrar</Link>
          </div>
        </nav>
}

NavBar.propTypes = {};

NavBar.defaultProps = {};