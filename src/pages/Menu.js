import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <NavLink className="navbar-brand" to="/">React</NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/heroes">heroes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/scoreboard">Scoreboard</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu;
