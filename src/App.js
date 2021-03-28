import React, { Component } from "react";
import Cart from "./components/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Cart />
      </React.Fragment>
    );
  }
}
