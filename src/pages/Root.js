import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Scoreboard from "./Scoreboard";
import Heroes from "./Heroes";

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <p>공통메뉴 영역</p>
          <Route path="/" component={Home}></Route>
          <Route path="/heroes" component={Heroes}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
        </>
      </BrowserRouter>
    )
  }
}
