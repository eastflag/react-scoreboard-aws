import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Scoreboard from "./Scoreboard";
import Heroes from "./Heroes";
import Menu from "./Menu";

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/heroes" component={Heroes}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}
