import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Guest from './Guest';
export default class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Guest}></Route>
      </Switch>
    );
  }
}
