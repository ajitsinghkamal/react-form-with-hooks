import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { BtnMixin, Wrapper } from './Elements';

const Container = styled.footer`box-shadow: 1px 0 0 1px ${(props) => props.theme.cd10};`;
const Wrap = styled(Wrapper)`
	display: flex;
	align-items: stretch;
	justify-content: space-between;
`;
const NavItem = styled(NavLink)`
	${BtnMixin}
	background: ${(props) => props.theme.cb10};
	text-decoration: none;
	text-align: center;
	box-shadow: 0 2px 8px 0px ${(props) => props.theme.cd20};
	&.active {
		box-shadow: none;
		background: ${(props) => props.theme.cb00}
	}

`;
function Footer(props) {
	return (
		<Container>
			<Wrap as="nav">
				<NavItem to="/" exact>
					Form
				</NavItem>
				<NavItem to="/submissions/">Submissions</NavItem>
			</Wrap>
		</Container>
	);
}

export default Footer;
