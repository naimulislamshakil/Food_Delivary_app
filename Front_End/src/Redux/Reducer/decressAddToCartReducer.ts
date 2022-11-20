import {
	DecressAddToCart,
	DecressAddToCartTypeDispatch,
	DECRESS_ADDTOCART_FAIL,
	DECRESS_ADDTOCART_LOADING,
	DECRESS_ADDTOCART_SUCCESS,
} from '../Action/ActionType/decressAddToCartActionType';

interface DefaultState {
	loading: boolean;
	message?: DecressAddToCart;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

const DecressAddToCartReducer = (
	state: DefaultState = initialState,
	action: DecressAddToCartTypeDispatch
): DefaultState => {
	switch (action.type) {
		case DECRESS_ADDTOCART_LOADING:
			return {
				loading: true,
				error: null,
			};
		case DECRESS_ADDTOCART_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case DECRESS_ADDTOCART_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default DecressAddToCartReducer;
