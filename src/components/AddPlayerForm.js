import React, {Component} from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class AddPlayerForm extends Component {
  textInput = React.createRef();
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }
  
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} type="text" ref={this.textInput} placeholder="enter a player's name" />
        <input className={styles.input} type="submit" value="Add Player" />
      </form>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (name) => dispatch(addPlayer(name))
  }
}

export default connect(null, mapDispatchToProps)(AddPlayerForm);
