import React from 'react';
import styled from 'styled-components';

import { Logo, Wrapper } from './Elements';

const Container = styled.header`box-shadow: 0 2px 0 2px gray;`;
const Wrap = styled(Wrapper)`
	display: flex;
	align-items: center;
`;
const Heading = styled.h1`
	margin: 0;
	font-size: 22px;
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
