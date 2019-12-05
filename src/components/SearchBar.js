import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchKeyword} from "../redux/actions";


export const SearchBar = (props) => {
  const keyword = useSelector(state => state.playerReducer.keyword);
  const dispatch = useDispatch();
  
  return (
    <form>
      <input type="text" placeholder="search.."
             value={keyword} onChange={(e) => dispatch(searchKeyword(e.target.value))}></input>
    </form>
  )
}
