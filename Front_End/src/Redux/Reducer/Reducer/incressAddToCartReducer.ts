import {
	IncressAddToCart,
	IncressAddToCartTypeDispatch,
	INCRESS_ADDTOCART_FAIL,
	INCRESS_ADDTOCART_LOADING,
	INCRESS_ADDTOCART_SUCCESS,
} from '../../Action/ActionType/incressAddToCartActionType';

interface DefaultState {
	loading: boolean;
	message?: IncressAddToCart;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

const IncressAddToCartReducer = (
	state: DefaultState = initialState,
	action: IncressAddToCartTypeDispatch
): DefaultState => {
	switch (action.type) {
		case INCRESS_ADDTOCART_LOADING:
			return {
				loading: true,
				error: null,
			};
		case INCRESS_ADDTOCART_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case INCRESS_ADDTOCART_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default IncressAddToCartReducer;
