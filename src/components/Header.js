import React from 'react';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  )
}

export default Header;
