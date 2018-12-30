import React, {Component} from 'react';

class Stats extends Component {
  render() {
    return (
      <table className="stats">
        <tbody>
        <tr>
          <td>Players:</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>0</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default Stats;
