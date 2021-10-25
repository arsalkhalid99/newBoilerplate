import React ,{useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import "./scss/style.scss";
import Main from './components/Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab,fas,far)

function App() {
  useEffect(()=>{
    const gsap = window.gsap;
    let tl = gsap.timeline();
    tl.to(".text",1,{
      x:200,
  })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className=''>
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
        <FontAwesomeIcon icon={['fas', 'angle-right']} />
        <FontAwesomeIcon icon={['fab', 'apple']} size="lg" />
        <Main />
      </header>
    </div>
  );
}

export default App;

