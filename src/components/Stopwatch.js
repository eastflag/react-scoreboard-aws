import React, {Component} from 'react';

class Stopwatch extends Component {
  tickRef;
  
  state = {
    isRunning: false,
    timer: 0
  }
  
  componentDidMount() {
    this.tickRef = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
  
  tick() {
    if (this.state.isRunning) {
      this.setState(prevState => prevState.timer += 1);
    }
  }
  
  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }
  
  handleReset = () => {
    this.setState({timer: 0});
  }
  
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
