export const PER_STORE_FAIL = 'PER_STORE_FAIL';
export const PER_STORE_LOADING = 'PER_STORE_LOADING';
export const PER_STORE_SUCCESS = 'PER_STORE_SUCCESS';

export type SingleStore = {
	status: string;
	message: string;
	data: {
		_id: string;
		name: string;
		location: string;
		tag: string[];
		category: string;
		place: string;
		imgUrl: string;
		status: string;
	};
};

export interface perStoreLoading {
	type: typeof PER_STORE_LOADING;
}
export interface perStoreFail {
	type: typeof PER_STORE_FAIL;
}
export interface perStoreSuccess {
	type: typeof PER_STORE_SUCCESS;
	payload: SingleStore;
}

export type PerStoreDispatchType =
	| perStoreFail
	| perStoreLoading
	| perStoreSuccess;
