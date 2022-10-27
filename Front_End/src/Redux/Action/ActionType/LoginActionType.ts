export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUSSESS = 'LOGIN_SUSSESS';

export type LogingUser = {
	status: string;
	message: string;
	data: {
		user: {
			_id: string;
			email: string;
			role: string;
			firstName: string;
			lastName: string;
			contactNumber: string;
			img: string;
			status: string;
		};
		token: string;
	};
};

export interface LoginFail {
	type: typeof LOGIN_FAIL;
}

export interface LoginLoading {
	type: typeof LOGIN_LOADING;
}

export interface Loginsuccess {
	type: typeof LOGIN_SUSSESS;
	payload: LogingUser;
}

export type LoginDispatchType = LoginFail | LoginLoading | Loginsuccess;
