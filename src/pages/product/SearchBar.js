import React from 'react';

export const SearchBar = (props) => {
	return (
		<div>
			<input placeholder="Search..." value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}></input><br />
			<input type="checkbox" checked={props.stockChecked} onChange={(e) => props.setStockChecked(e.target.checked)}></input>Only show products in stock
		</div>
	)
}
