import React, { Component } from 'react';
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
import AccountPage from './components/AccountPage/AccountPage';
import Animation from './components/Animation/Animation';
import Modal from './components/Modal/Modal';
import Ad from './components/Ad/Ad';
import SignupLogin from './components/SignupLogin/SignupLogin';

import GalleryInstagramStyle from './components/GalleryInstagramStyle/GalleryInstagramStyle';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import "bootstrap/dist/css/bootstrap.min.css";

import "bootswatch/dist/cosmo/bootstrap.min.css"

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/catalog-app">
          {/*<React.StrictMode>*/}
            <NavBar />
            <Title />
            <Gallery />
            <FootNote />
          {/*</React.StrictMode>*/}
        </Route>
        <Route exact path="/signuplogin">
          <NavBar />
          <SignupLogin />
        </Route>
        <Route exact path="/accountPage">
          {/*<NavBar />*/}
          <AccountPage />
        </Route>
        {/*<Route exact path="/signuplogin">
          <NavBar />
          <Signup />
          {/*<AccountPage /> /}
          <div id="canvas" />
        </Route>*/}
        <Route exact path="/instagram">
          <NavBar />
          <GalleryInstagramStyle />
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

//import ZoomSlider from 'react-instagram-zoom-slider';
//import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';

/*const IMG_URLS = [
  'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
  'https://source.unsplash.com/ulJYHTb86Bo/1600x1600',
  'https://source.unsplash.com/GCm0tha8IGY/1600x1600',
  'https://source.unsplash.com/T0nxUz68lG0/1600x1600',
  'https://source.unsplash.com/2d4lAQAlbDA/1600x1600',
  'https://source.unsplash.com/qQQdRI_Y7iw/1600x1600',
]*/

//const slides = IMG_URLS.map(src => <img src={src} alt="Pascale Dress - Floral" draggable="false" />)


/*function Example() {
  const slides = [<img src='https://source.unsplash.com/mMa_cpvxeBU/1600x1600' alt="Pascale Dress - Floral" draggable="false" />];

  console.log(slides);
  return (
    <div className="example">
      <h1>Simple example</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
      <ZoomSlider slides={slides} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>

      <h1>Example with overlay</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
      <ZoomSlider
        slides={slides}
        slideOverlay={
          <button
            type="button"
            onClick={() => alert('Added to favourites!')}
            style={{
              position: 'absolute',
              width: 40,
              top: 10,
              left: 10,
              padding: 0,
              appearance: 'none',
              border: 'none',
              background: 'none',
            }}
          >
            <img
              alt="Heart icon"
              src="data:image/svg+xml;base64,PHN2ZwpmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOCkiCnhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKdmlld0JveD0iMCAwIDUwIDUwIgo+CjxwYXRoIGQ9Ik0gMjUgNDQuMjk2ODc1IEwgMjQuMzYzMjgxIDQzLjc2OTUzMSBDIDIzLjM2MzI4MSA0Mi45NDE0MDYgMjIuMDE5NTMxIDQyLjAyNzM0NCAyMC40Njg3NSA0MC45Njg3NSBDIDE0LjMwODU5NCAzNi43NjU2MjUgNSAzMC40MTQwNjMgNSAyMC4yODUxNTYgQyA1IDE0LjA2MjUgMTAuMDk3NjU2IDkgMTYuMzYzMjgxIDkgQyAxOS43MTQ4NDQgOSAyMi44NTE1NjMgMTAuNDU3MDMxIDI1IDEyLjk1NzAzMSBDIDI3LjE0ODQzOCAxMC40NTcwMzEgMzAuMjg5MDYzIDkgMzMuNjM2NzE5IDkgQyAzOS45MDIzNDQgOSA0NSAxNC4wNjI1IDQ1IDIwLjI4NTE1NiBDIDQ1IDMwLjQxNDA2MyAzNS42OTE0MDYgMzYuNzY1NjI1IDI5LjUzMTI1IDQwLjk2ODc1IEMgMjcuOTc2NTYzIDQyLjAyNzM0NCAyNi42MzY3MTkgNDIuOTQxNDA2IDI1LjYzNjcxOSA0My43Njk1MzEgWiIgLz4KPC9zdmc+Cg=="
            />
          </button>
        }
        slideIndicatorTimeout={null}
        activeDotColor="#ff9800"
        dotColor="#4b4b4b"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
    </div>
  )
}*/