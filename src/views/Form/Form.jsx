import React, { useState } from 'react';
import Field from 'components/Field';
import { Btn } from 'components/Elements';
function Form() {
	const [
		details,
		setDetails
	] = useState({
		name: '',
		phone: '',
		email: '',
		pass: ''
	});
	function submitDetails(e) {
		e.preventDefault();
	}
	function setFieldValue({ key, value }) {
		setDetails({
			...details,
			[key]: value
		});
	}
	return (
		<form onSubmit={submitDetails}>
			<Field fieldKey="name" label="Name" placeholder="Enter your full name" auto="name" set={setFieldValue} />
			<Field fieldKey="phone" label="Phone" placeholder="Enter your contact number" auto="" set={setFieldValue} />
			<Field
				fieldKey="email"
				label="Email *"
				placeholder="Enter your email id"
				type="email"
				auto=""
				set={setFieldValue}
			/>
			<Field
				fieldKey="pass"
				label="Password"
				placeholder="Enter your password"
				type="password"
				set={setFieldValue}
			/>
			<Btn type="submit">Submit Details</Btn>
		</form>
	);
}

export default Form;
