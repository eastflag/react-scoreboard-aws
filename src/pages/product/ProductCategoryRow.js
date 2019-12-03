import React from 'react';

export const ProductCategoryRow = (props) => {
	return (
		<tr colSpan="2">
			<th>{props.category}</th>
		</tr>
	)
}
