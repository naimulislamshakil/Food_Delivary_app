export const PERSISTENCE_FAIL = 'PERSISTENCE_FAIL';
export const PERSISTENCE_LOADING = 'PERSISTENCE_LOADING';
export const PERSISTENCE_SUCCESS = 'PERSISTENCE_SUCCESS';

export type Persistence = {
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
	};
};

export interface PersistenceFail {
	type: typeof PERSISTENCE_FAIL;
	payload: null | any;
}
export interface PersistenceLoading {
	type: typeof PERSISTENCE_LOADING;
}
export interface PersistenceSuccess {
	type: typeof PERSISTENCE_SUCCESS;
	payload: Persistence;
}

export type PersistenceDispatcType =
	| PersistenceFail
	| PersistenceLoading
	| PersistenceSuccess;
