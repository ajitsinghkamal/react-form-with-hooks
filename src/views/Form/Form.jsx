import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Field from 'components/Field';
import { Btn } from 'components/Elements';
import DetailsContext from 'state/detailsContext';
import { validator } from 'services/validator';
const Submit = styled(Btn)`
	background: ${(props) => (props.disable ? props.theme.cd00 : props.theme.cb00)};
    padding: 20px;
    width: 300px;
	max-width: 90%;
	transition: background 0.3s;
`;
const FormWrap = styled.form`padding: 20px 0 30px;`;
function Form() {
	const { shouldUpdateList } = useContext(DetailsContext);
	const [
		details,
		setDetails
	] = useState({
		name: '',
		phone: '',
		email: '',
		pass: '',
		error: null
	});
	function submitDetails(e) {
		e.preventDefault();
		if (!details.email) {
			setDetails({ ...details, error: 'Field is required' });
		} else if (!validator('email', details.email)) {
			setDetails({ ...details, error: 'Email is invalid' });
		} else {
			setDetails({ ...details, error: null });
			shouldUpdateList({ ...details, time: Date.now() });
		}
	}
	function setFieldValue({ key, value }) {
		setDetails({
			...details,
			[key]: value
		});
	}
	return (
		<FormWrap onSubmit={submitDetails}>
			<Field fieldKey="name" label="Name" placeholder="Enter your full name" auto="name" set={setFieldValue} />
			<Field fieldKey="phone" label="Phone" placeholder="Enter your contact number" auto="" set={setFieldValue} />
			<Field
				fieldKey="email"
				label="Email *"
				placeholder="Enter your email id"
				type="email"
				auto=""
				hasError={details.error}
				set={setFieldValue}
			/>
			<Field
				fieldKey="pass"
				label="Password"
				placeholder="Enter your password"
				type="password"
				set={setFieldValue}
			/>
			<Submit type="submit" disable={!details.email}>
				Submit Details
			</Submit>
		</FormWrap>
	);
}

export default Form;
