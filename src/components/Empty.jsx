import React from 'react';
import { ReactComponent as Icon } from 'assets/icons/placeholder.svg';
import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
const IconBox = styled(Icon)`
	width: 150px;
	height: 150px;
	margin-bottom: 30px;
`;
function Empty(props) {
	return (
		<Container>
			<IconBox />
			<p>No Record Found!</p>
		</Container>
	);
}
export default Empty;
