export const ADDTOCART_FAIL = 'ADDTOCART_FAIL';
export const ADDTOCART_LOADING = 'ADDTOCART_LOADING';
export const ADDTOCART_SUCCESS = 'ADDTOCART_SUCCESS';

export type AddToCart = {
	status: string;
	message: string;
};

export interface AddToCartLoading {
	type: typeof ADDTOCART_LOADING;
}
export interface AddToCartFail {
	type: typeof ADDTOCART_FAIL;
	payload: null | any;
}
export interface AddToCartSuccess {
	type: typeof ADDTOCART_SUCCESS;
	payload: AddToCart;
}

export type AddToCartTypeDispatch =
	| AddToCartFail
	| AddToCartLoading
	| AddToCartSuccess;
