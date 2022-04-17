import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import Title from './components/Title/Title';
import Gallery from './components/Gallery/Gallery';
import FootNote from './components/FootNote/FootNote';
import NavBar from './components/NavBar/NavBar';
import AccountPage from './components/AccountPage/AccountPage';
import SignupLogin from './components/SignupLogin/SignupLogin';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Logout from './components/Logout/Logout';

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
          <AccountPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}