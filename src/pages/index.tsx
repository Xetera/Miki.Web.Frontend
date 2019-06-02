import React from "react"
import { NavbarComponent } from "./components/navbar";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./home";

export default class Root extends React.Component {
    render() {
        return <Router>
            <div>
            <NavbarComponent/>
            <Route path="/" exact component={Home} />
            </div>
        </Router>
    }
}