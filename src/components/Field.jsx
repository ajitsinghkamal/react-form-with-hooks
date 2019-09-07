import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	font-size: 1rem;
	display: block;
	width: 100%;
	padding: 20px 15px;
	margin: 10px 0 30px;
	border: 0;
	border-radius: 8px;
	box-shadow: 0 0px 0px 1px ${(props) => props.theme.cb10};
	transition: box-shadow 0.3s;
	&:focus {
		outline: 0;
		box-shadow: 0 0px 0px 1px ${(props) => props.theme.cb00}, 0 4px 8px 2px ${(props) => props.theme.cd10};
	}
`;
const Label = styled.label`
	font-size: 0.875rem;
	font-weight: 600;
`;
function Field(props) {
	return (
		<div>
			<Label>{props.label}</Label>
			<Input
				type={props.type}
				placeholder={props.placeholder}
				autoComplete={props.auto || 'off'}
				onChange={(e) =>
					props.set({
						key: props.fieldKey,
						value: e.target.value
					})}
			/>
		</div>
	);
}
export default Field;
