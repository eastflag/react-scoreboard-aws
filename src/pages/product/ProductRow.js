import React from 'react';
import styles from './ProductRow.module.scss';
import classNames from 'classnames'

export const ProductRow = (props) => {
	return (
		<tr className={classNames({[styles.stock]: !props.stocked})}>
			<td>{props.name}</td>
			<td>{props.price}</td>
		</tr>
	)
}
