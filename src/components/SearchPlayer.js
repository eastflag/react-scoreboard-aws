import React, {Component} from 'react';
import {setIsSorted, updateTitle} from "../redux/actions";
import {connect} from "react-redux";

class SearchPlayer extends Component {
  handleChange = (e) => {
    this.props.setIsSorted(e.target.checked);
  };
  
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" checked={this.props.isSorted} onChange={this.handleChange}></input>
          show good player and bad player
        </label>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  isSorted: state.playerReducer.isSorted
})

let mapDispatchToProps = (dispatch) => ({
  setIsSorted: (isSorted) => dispatch(setIsSorted(isSorted))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayer);
