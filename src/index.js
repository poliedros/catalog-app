import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Title from './components/Title/Title';
import Gallery from './components/Gallery/Gallery';
import FootNote from './components/FootNote/FootNote';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Animation from './components/Animation/Animation';
import Modal from './components/Modal/Modal';
import Ad from './components/Ad/Ad';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          {/*<React.StrictMode>*/}
            <NavBar />
            <Title />
            <Gallery />
            <FootNote />
          {/*</React.StrictMode>*/}
        </Route>
        <Route exact path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route exact path="/signup">
          <NavBar />
          <Signup />
          <Animation />
          <div id="canvas" />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
