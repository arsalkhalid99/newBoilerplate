import React ,{useEffect} from "react";
// import * as React  from 'react';
import logo from './assets/images/my-logo.png';
import banner from './assets/images/header-bg.jpg';
import './App.css';
import "./assets/scss/styles.scss";
import Main from './components/Main'
import Uikit from "./components/Uikit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'



function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className=''>
          Edit <code>src/App.js</code> and save to reloads.!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Main />
      </header> */}
      <header>
        <div className="container">
          <nav>
            <a className="logo" href="#">
                <img src={logo} alt="logo" />
            </a>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="contentWrapper">
        <div className="bannerImg">
          <img src={banner} alt="header-bg" />
          <div className="caption">
            <h1>I'm Arsal Khalid.</h1>
            <p>I'm a LAHORE based UI/UX frontend Web Developer. A motivated Software developer having in-depth knowledge of languages and development tools, seeking to ﬁnd the opportunity to work in a fun, challenging and growth-oriented organization that encourages in learning new and necessary skills so that mutual benefit can be attained.</p>
            <ul class="social">
              <li>
                <a href="https://www.facebook.com/arsalkhalid99/"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arsal-khalid-780424157/"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/arsalyyy/">
                   <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

