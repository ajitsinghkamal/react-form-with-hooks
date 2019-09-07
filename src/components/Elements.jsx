import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	padding: 20px 30px;
	max-width: 900px;
	margin: 0 auto;
`;
export const Logo = styled.div`
	border-radius: 50%;
	width: 30px;
	height: 30px;
	margin-right: 20px;
	background: ${(props) => props.theme.cb10};
`;
export const BtnMixin = css`
	border-radius: 8px;
	border: none;
	color: #fff;
	font-size: 1rem;
	padding: 10px 15px;
	min-width: 150px;
	font-weight: 600;
	transition: box-shadow 0.3s;
	cursor: pointer;
	&:hover {
		box-shadow: none;
	}
`;
export const Btn = styled.button`${BtnMixin};`;
