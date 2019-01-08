import React, {Component} from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends Component {
  textInput = React.createRef();
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput} placeholder="enter a player's name" />
        <input type="submit" value="Add Player" />
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
