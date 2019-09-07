import React from 'react';
import styled from 'styled-components';

import { Logo, Wrapper } from './Elements';

const Container = styled.header`box-shadow: 0 1px 8px 0px ${(props) => props.theme.cd10};`;
const Wrap = styled(Wrapper)`
	display: flex;
	align-items: center;
`;
const Heading = styled.h1`
	margin: 0;
	font-size: 22px;
	color: ${(props) => props.theme.cb00};
`;
function Header() {
	return (
		<Container>
			<Wrap>
				<Logo />
				<Heading>A Company</Heading>
			</Wrap>
		</Container>
	);
}

export default Header;
