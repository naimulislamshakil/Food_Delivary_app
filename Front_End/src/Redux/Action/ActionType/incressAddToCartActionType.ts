export const INCRESS_ADDTOCART_FAIL = 'INCRESS_ADDTOCART_FAIL';
export const INCRESS_ADDTOCART_LOADING = 'INCRESS_ADDTOCART_LOADING';
export const INCRESS_ADDTOCART_SUCCESS = 'INCRESS_ADDTOCART_SUCCESS';

export type IncressAddToCart = {
	status: string;
	message: string;
};

export interface IncressAddToCartLoading {
	type: typeof INCRESS_ADDTOCART_LOADING;
}
export interface IncressAddToCartFail {
	type: typeof INCRESS_ADDTOCART_FAIL;
	payload: null | any;
}
export interface IncressAddToCartSuccess {
	type: typeof INCRESS_ADDTOCART_SUCCESS;
	payload: IncressAddToCart;
}

export type IncressAddToCartTypeDispatch =
	| IncressAddToCartFail
	| IncressAddToCartLoading
	| IncressAddToCartSuccess;
