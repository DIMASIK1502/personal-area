import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import "./Guest.scss";

export class Guest extends Component {
  render() {
    return (
      <div className="guest-layout">
        <div className="container">
          <Switch>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Guest;
