import React, {Component} from 'react';

class Stopwatch extends Component {
  state = {
    isRunning: false
  }
  
  handleStopwatch = () => {
    this.setState(prevState => {
      return {isRunning: !prevState.isRunning}
    });
  }
  
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Start' : 'Stop'}</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
