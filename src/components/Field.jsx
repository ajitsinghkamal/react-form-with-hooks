import React from 'react';
import styled from 'styled-components';

const FieldWrap = styled.div`position: relative;`;
const Input = styled.input`
	font-size: 1rem;
	display: block;
	width: 100%;
	padding: 20px 15px;
	margin: 10px 0 30px;
	border: 0;
	border-radius: 8px;
	box-shadow: 0 0px 0px 1px ${(props) => (props.hasError ? props.theme.cr00 : props.theme.cb10)};
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
const Error = styled.small`
	font-weight: 600;
	color: ${(props) => props.theme.cr00};
	position: absolute;
	bottom: -20px;
`;
function Field(props) {
	return (
		<FieldWrap>
			<Label>{props.label}</Label>
			<Input
				error={props.hasError}
				type={props.type}
				placeholder={props.placeholder}
				autoComplete={props.auto || 'off'}
				onChange={(e) =>
					props.set({
						key: props.fieldKey,
						value: e.target.value
					})}
			/>
			{props.hasError ? <Error>{props.hasError}</Error> : null}
		</FieldWrap>
	);
}
export default Field;
