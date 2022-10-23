export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export type RegisterUesr = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	contactNumber?: string;
	img?: string;
};

interface RegisterLoading {
	type: typeof REGISTER_LOADING;
}

interface RegisterFail {
	type: typeof REGISTER_FAIL;
}

interface RegisterSuccess {
	type: typeof REGISTER_SUCCESS;
	payload: string;
}

export type RegisterDispatchType =
	| RegisterFail
	| RegisterLoading
	| RegisterSuccess;
