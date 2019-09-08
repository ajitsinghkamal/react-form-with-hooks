import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { BtnMixin, Wrapper } from './Elements';
import DetailsContext from 'state/detailsContext';

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
const Badge = styled.span`
	width: 15px;
	height: 15px;
	line-height: 15px;
	display: inline-block;
	border-radius: 50%;
	font-size: 12px;
	margin: 0 10px;
	background: #fff;
	color: #2d2d2d;
`;
function Footer(props) {
	const { list } = useContext(DetailsContext);
	return (
		<Container>
			<Wrap as="nav">
				<NavItem to="/" exact>
					Form
				</NavItem>
				<NavItem to="/submissions/">
					Submissions <Badge>{list && list.length}</Badge>
				</NavItem>
			</Wrap>
		</Container>
	);
}

export default Footer;
