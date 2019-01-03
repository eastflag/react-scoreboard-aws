import React, {Component} from 'react';

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

export default AddPlayerForm;
