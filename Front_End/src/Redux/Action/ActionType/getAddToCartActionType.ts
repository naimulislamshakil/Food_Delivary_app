export const GET_ADDTOCART_LOADING = 'GET_ADDTOCART_LOADING';
export const GET_ADDTOCART_FAIL = 'GET_ADDTOCART_FAIL';
export const GET_ADDTOCART_SUCCESS = 'GET_ADDTOCART_SUCCESS';

export type SingleAddToCartProduct = {
	store: {
		id: string;
	};
	_id: string;
	category: string;
	email: string;
	description: string;
	img: string;
	name: string;
	price: number;
	orderQuantity: number;
	totalPrice: number;
	quantity: number;
	status: string;
	unit: string;
	id: string;
};

export type GetAddToCart = {
	status: string;
	message: string;
	result: {
		result: SingleAddToCartProduct[];
		count: number;
	};
};

export interface GetAddToCartLoading {
	type: typeof GET_ADDTOCART_LOADING;
}
export interface GetAddToCartFail {
	type: typeof GET_ADDTOCART_FAIL;
	payload: null | any;
}
export interface GetAddToCartSuccess {
	type: typeof GET_ADDTOCART_SUCCESS;
	payload: GetAddToCart;
}

export type GetAddToCartDispatchType =
	| GetAddToCartFail
	| GetAddToCartLoading
	| GetAddToCartSuccess;
