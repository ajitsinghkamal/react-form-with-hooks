import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Field from 'components/Field';
import { Btn } from 'components/Elements';
import DetailsContext from 'state/detailsContext';
import { validator, TYPES } from 'services/validator';
const Submit = styled(Btn)`
	background: ${(props) => (props.disable ? props.theme.cd00 : props.theme.cb00)};
    padding: 20px;
    width: 300px;
	max-width: 90%;
	transition: background 0.3s;
`;
const FormWrap = styled.form`padding: 20px 0 30px;`;
function initialiseState() {
	return {
		name: {
			isPristine: true,
			required: true,
			regex: null,
			unique: false,
			value: '',
			error: null,
			meta: {
				placeholder: 'Enter your full name',
				auto: 'name',
				label: 'Name'
			}
		},
		phone: {
			isPristine: true,
			required: true,
			regex: null,
			unique: false,
			value: '',
			error: null,
			meta: {
				auto: 'tel',
				placeholder: 'Enter your Contact number',
				label: 'Contact No.'
			}
		},
		email: {
			isPristine: true,
			required: true,
			regex: TYPES.EMAIL,
			unique: true,
			value: '',
			error: null,
			meta: {
				placeholder: 'Enter your email address',
				auto: 'email',
				label: 'Email'
			}
		},
		pass: {
			isPristine: true,
			required: true,
			regex: null,
			unique: false,
			error: null,
			value: '',
			meta: {
				placeholder: 'Enter your password',
				auto: 'current-password',
				label: 'Password'
			}
		}
	};
}
function Form() {
	const { shouldUpdateList } = useContext(DetailsContext);
	const [
		details,
		setDetails
	] = useState(initialiseState());

	function checkRequiredFieldErrors() {
		Object.keys(details).forEach((key) => {
			if (details[key].required && !details[key].value) {
				details[key].error = `${details[key].meta.label} field must be filled before submission`;
			}
		});
		setDetails({ ...details });
	}
	function submitDetails(e) {
		e.preventDefault();
		checkRequiredFieldErrors();
		// if (!details.email) {
		// 	setDetails({ ...details, error: 'Field is required' });
		// } else if (!validator('email', details.email)) {
		// 	setDetails({ ...details, error: 'Email is invalid' });
		// } else {
		// 	setDetails({ ...details, error: null });
		// 	shouldUpdateList({ ...details, time: Date.now() });
		// }
	}

	// validator function to check if any required field is empty
	function isIncomplete() {
		return Object.values(details).some((field) => field.required && !field.value);
	}

	function setFieldValue({ key, value }) {
		setDetails({
			...details,
			[key]: { ...details[key], value, error: null }
		});
	}
	return (
		<FormWrap onSubmit={submitDetails}>
			{details ? (
				Object.keys(details).map((key) => {
					return (
						<Field
							key={key}
							fieldKey={key}
							label={details[key].meta.label}
							placeholder={details[key].meta.placeholder}
							auto={details[key].meta.auto}
							set={setFieldValue}
							hasError={details[key].error}
						/>
					);
				})
			) : null}
			<Submit type="submit" disable={isIncomplete()}>
				Submit Details
			</Submit>
		</FormWrap>
	);
}

export default Form;
