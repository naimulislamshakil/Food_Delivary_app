export const DECRESS_ADDTOCART_FAIL = 'DECRESS_ADDTOCART_FAIL';
export const DECRESS_ADDTOCART_LOADING = 'DECRESS_ADDTOCART_LOADING';
export const DECRESS_ADDTOCART_SUCCESS = 'DECRESS_ADDTOCART_SUCCESS';

export type DecressAddToCart = {
	status: string;
	message: string;
};

export interface DecressAddToCartLoading {
	type: typeof DECRESS_ADDTOCART_LOADING;
}
export interface DecressAddToCartFail {
	type: typeof DECRESS_ADDTOCART_FAIL;
	payload: null | any;
}
export interface DecressAddToCartSuccess {
	type: typeof DECRESS_ADDTOCART_SUCCESS;
	payload: DecressAddToCart;
}

export type DecressAddToCartTypeDispatch =
	| DecressAddToCartFail
	| DecressAddToCartLoading
	| DecressAddToCartSuccess;
