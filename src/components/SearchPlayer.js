import React, {Component} from 'react';
import {searchName, setIsSorted, updateTitle} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class SearchPlayer extends Component {
  handleChange = (e) => {
    this.props.setIsSorted(e.target.checked);
  };
  
  handleSearch = (e) => {
    this.props.searchName(e.target.value);
  }
  
  
  render() {
    return (
      <div className={styles['search-box']}>
        <input type="text" placeholder="search name" onChange={this.handleSearch}></input>
        <label className="mt-3">
          <input type="checkbox" checked={this.props.isSorted} onChange={this.handleChange}></input>
          show good player and bad player
        </label>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  isSorted: state.playerReducer.isSorted,
  keyword: state.playerReducer.keyword
})

let mapDispatchToProps = (dispatch) => ({
  setIsSorted: (isSorted) => dispatch(setIsSorted(isSorted)),
  searchName: (name) => dispatch(searchName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayer);
