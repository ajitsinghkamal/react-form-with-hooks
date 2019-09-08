import React, { useContext } from 'react';
import DetailsContext from 'state/detailsContext';
import Empty from 'components/Empty';
function List() {
	const { list } = useContext(DetailsContext);
	const RecordFields = [
		{ key: 'id', label: 'ID' },
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{ key: 'phone', label: 'Phone' },
		{ key: 'pass', label: 'Password' },
		{ key: 'time', label: 'Updated' }
	];
	function makeRow(row, id) {
		return RecordFields.map((cell) => {
			return <td key={id + cell.key}>{cell === 'id' ? id : row[cell.key]}</td>;
		});
	}
	return (
		<div>
			{list.length ? (
				<table>
					<thead>
						<tr>
							{RecordFields.map((cell) => {
								return <th key={cell.key}>{cell.label}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{list.map((user, index) => {
							return <tr key={user.email}>{makeRow(user, index)}</tr>;
						})}
					</tbody>
				</table>
			) : (
				<Empty />
			)}
		</div>
	);
}

export default List;
