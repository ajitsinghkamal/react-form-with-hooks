export const TYPES = {
	EMAIL: 'email'
};
const EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export function validator(validationFor, toValidate) {
	switch (validationFor) {
		case TYPES.EMAIL:
			return EMAIL.test(toValidate);
		default:
			return false;
	}
}
