import React from 'react';
import styled from 'styled-components';

import { Btn, Wrapper } from './Elements';

const Container = styled.footer`box-shadow: 2px 0 0 2px gray;`;
const Wrap = styled(Wrapper)`
	display: flex;
	align-items: stretch;
`;

function Footer() {
	return (
		<Container>
			<Wrap>
				<Btn>Form</Btn>
				<Btn>Submissions</Btn>
			</Wrap>
		</Container>
	);
}

export default Footer;
