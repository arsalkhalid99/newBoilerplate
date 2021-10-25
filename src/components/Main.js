import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../App';
import About from "./About";

export default function Main() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/about"  component={About} />
                </Switch>
            </Router>
        </>
    )
}