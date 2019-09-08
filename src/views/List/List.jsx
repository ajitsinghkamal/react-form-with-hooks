import React, { useContext } from 'react';
import DetailsContext from 'state/detailsContext';
import Empty from 'components/Empty';
import styled, { css } from 'styled-components';

const ListWrap = styled.div`
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid ${(props) => props.theme.cb00};
`;
const Cell = css`
	padding: 15px 20px;
	text-align: left;
`;
const TableHead = styled.thead`
	background: ${(props) => props.theme.cb20};
	@media screen and (max-width: 767px) {
		display: none;
	}
`;
const HeadCell = styled.th`
	${Cell} font-weight: 500;
	font-size: 0.875rem;
`;
const BodyRow = styled.tr`
	&:nth-child(odd) {
		background: ${(props) => props.theme.cd30};
	}
	@media screen and (max-width: 767px) {
		display: block;
		position: relative;
	}
`;
const RowCell = styled.td`
	${Cell};
	line-height: 1.5;
	vertical-align: top;
	@media screen and (max-width: 767px) {
		display: table-row;
		line-height: 2;
		&:before {
			content: attr(data-label);
			display: table-cell;
			font-weight: 500;
			width: 30%;
			text-align: left;
			padding: 5px 12px;
		}
	}
`;
const Table = styled.table`
	width: 100%;
	border-spacing: initial;
`;
function List() {
	const { list } = useContext(DetailsContext);
	const RecordFields = [
		{ id: 'id', label: 'ID' },
		{ id: 'name', label: 'Name' },
		{ id: 'email', label: 'Email' },
		{ id: 'phone', label: 'Phone' },
		{ id: 'pass', label: 'Password' },
		{ id: 'time', label: 'Updated' }
	];
	function makeRow(row, id) {
		return RecordFields.map((cell) => {
			return (
				<RowCell data-label={cell.label} key={id + cell.id}>
					{cell.id === 'id' ? id : row[cell.id].value || row[cell.id]}
				</RowCell>
			);
		});
	}
	return (
		<div>
			{list.length ? (
				<ListWrap>
					<Table>
						<TableHead>
							<tr>
								{RecordFields.map((cell) => {
									return <HeadCell key={cell.id}>{cell.label}</HeadCell>;
								})}
							</tr>
						</TableHead>
						<tbody>
							{list.map((user, index) => {
								return <BodyRow key={user.email.value}>{makeRow(user, index)}</BodyRow>;
							})}
						</tbody>
					</Table>
				</ListWrap>
			) : (
				<Empty />
			)}
		</div>
	);
}

export default List;
