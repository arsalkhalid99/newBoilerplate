import React ,{useEffect} from "react";
// import * as React  from 'react';
import logo from './logo.svg';
import './App.css';
import "./scss/style.scss";
// import Main from './components/Main'
import Uikit from "./components/Uikit";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className=''>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Main /> */}
        {/* <Uikit /> */}
      </header>
    </div>
  );
}

export default App;

