import React, {Component} from 'react';
import {addPlayer} from "../redux/actions";
import {useDispatch} from 'react-redux';

const AddPlayerForm = () => {
  const dispatch = useDispatch();
  const textInput = React.createRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(textInput.current.value));
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={textInput} placeholder="enter a player's name" />
      <input type="submit" value="Add Player" />
    </form>
  )
}

export default AddPlayerForm;
