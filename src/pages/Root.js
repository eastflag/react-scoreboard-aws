import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import Heroes from "./heroes/Heroes";
import Menu from "./Menu";
import Hero from "./hero/Hero";

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <div className="container py-3" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/heroes" component={Heroes}></Route>
              <Route path="/scoreboard" component={Scoreboard}></Route>
              <Route path="/hero/:hero_id" component={Hero}></Route>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    )
  }
}
