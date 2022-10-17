export const STORE_PER_FAIL = 'STORE_PER_FAIL';
export const STORE_PER_LOADING = 'STORE_PER_LOADING';
export const STORE_PER_SUCCESS = 'STORE_PER_SUCCESS';

type PerStore = {
	_id: string;
	name: string;
	location: string;
	tag: string[];
	category: string;
	place: string;
	imgUrl: string;
	status: string;
};

export interface storePerLoading {
	type: typeof STORE_PER_LOADING;
}
export interface storePerFail {
	type: typeof STORE_PER_FAIL;
}
export interface storePerSuccess {
	type: typeof STORE_PER_SUCCESS;
	payload: PerStore;
}

export type StorePerDispatchType =
	| storePerLoading
	| storePerFail
	| storePerSuccess;
