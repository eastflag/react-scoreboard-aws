import React, {Component} from 'react';

import styles from '../pages/scoreboard/Scoreboard.module.css';

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
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <span className={styles["stopwatch-time"]}>{this.state.timer}</span>
        <button className={styles.button} onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button className={styles.button} onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
