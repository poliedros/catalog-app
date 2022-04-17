import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Title from './components/Title/Title';
import Gallery from './components/Gallery/Gallery.old';
import FootNote from './components/FootNote/FootNote';
import NavBar from './components/NavBar/NavBar';
import AccountPage from './components/AccountPage/AccountPage';
import SignupLogin from './components/SignupLogin/SignupLogin';
import GalleryInstagramStyle from './components/GalleryInstagramStyle/GalleryInstagramStyle';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Logout from './components/Logout/Logout';

//import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Logout />
          <NavBar />
          <Title />
          <Gallery />
          <FootNote />
        </Route>
        <Route path="/signuplogin">
          <Logout />
          <NavBar />
          <SignupLogin />
        </Route>
        <Route path="/accountPage">
          {/*<NavBar />*/}
          <AccountPage />
        </Route>
          {/*<Route exact path="/signuplogin">
          <NavBar />
          <Signup />
          {/*<AccountPage /> /}
          <div id="canvas" />
          </Route>*/}
        <Route path="/instagram">
          <NavBar />
          <GalleryInstagramStyle />
        </Route>
      </Switch>
    </HashRouter>
    /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>*/
  );
}

//export default App;
