import * as React from "react"
import NavbarComponent from "../components/navbar"
import { Router } from "@reach/router"
import Home from "../components/home"

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Home path="/" />
        </Router>
      </div>
    )
  }
}
