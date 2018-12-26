import React from "react";

class Counter extends React.Component {
  state = {
    score: 0
  };
  
  incrementScore = () => {
    console.log(this);
    this.setState(prevState => {
      return {score: prevState.score + 1}
    });
  }
  
  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    });
  }
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

export default Counter;
