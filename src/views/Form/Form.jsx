import React, { useState, useContext } from 'react';
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

// default form state
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
	const { list, shouldUpdateList } = useContext(DetailsContext);
	const [
		details,
		setDetails
	] = useState({ ...initialiseState() });

	/**
	 * verify if supplied value doesn't already exists in the state
	 * @param {string} field: Field with the unique value 
	 * @param {*} value: new value to check for
	 * return true if a duplicate value found
	 */
	function checkDuplicate(field, value) {
		return list.some((record) => record[field] === value);
	}
	// check for errors and update state with error
	function checkFieldErrors() {
		let isValid = true;
		Object.keys(details).forEach((key) => {
			if (details[key].required && !details[key].value) {
				// check for missing fields
				details[key].error = `${details[key].meta.label} field must be filled before submission`;
				isValid = false;
			} else if (details[key].regex && !validator(details[key].regex, details[key].value)) {
				// check for failing fields according to regex supplied
				details[key].error = `Entered value is not a valid ${details[key].meta.label} value`;
				isValid = false;
			} else if (details[key].unique && checkDuplicate(key, details[key].value)) {
				// check for unique fields with existing value
				details[key].error = `Value already exists`;
				isValid = false;
			}
		});
		setDetails({ ...details });
		return isValid;
	}

	// handler for form submit
	// performs validation and updation of state with successful submission
	function submitDetails(e) {
		e.preventDefault();
		const isFormValid = checkFieldErrors();
		if (isFormValid) {
			// no errors update the record in central list
			setDetails({ ...initialiseState() });
			shouldUpdateList({ ...details, time: Date.now() });
		}
	}

	// validator function to check if any required field is empty
	function isIncomplete() {
		return Object.values(details).some((field) => field.required && !field.value);
	}

	/**
	 * utility for updating state of a single field in form
	 * @param {object} {
	 * key: key identifier for the field,
	 * value: new value to updated on that field
	 * }
	 */
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
							value={details[key].value}
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
