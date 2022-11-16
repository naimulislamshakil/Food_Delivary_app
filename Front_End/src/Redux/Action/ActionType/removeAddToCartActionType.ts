export const REMOVE_ADDTOCART_FAIL = 'REMOVE_ADDTOCART_FAIL';
export const REMOVE_ADDTOCART_LOADING = 'REMOVE_ADDTOCART_LOADING';
export const REMOVE_ADDTOCART_SUCCESS = 'REMOVE_ADDTOCART_SUCCESS';

export type RemoveAddToCart = {
	status: string;
	message: string;
	result: {
		acknowledged: boolean;
		deletedCount: number;
	};
};

export interface RemoveAddToCartLoading {
	type: typeof REMOVE_ADDTOCART_LOADING;
}
export interface RemoveAddToCartFail {
	type: typeof REMOVE_ADDTOCART_FAIL;
	payload: null | any;
}
export interface RemoveAddToCartSuccess {
	type: typeof REMOVE_ADDTOCART_SUCCESS;
	payload: RemoveAddToCart;
}

export type RemoveAddToCartTypeDispatch =
	| RemoveAddToCartFail
	| RemoveAddToCartLoading
	| RemoveAddToCartSuccess;
