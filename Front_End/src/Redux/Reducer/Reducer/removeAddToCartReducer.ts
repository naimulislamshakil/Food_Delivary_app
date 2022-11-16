import {
	RemoveAddToCart,
	RemoveAddToCartTypeDispatch,
	REMOVE_ADDTOCART_FAIL,
	REMOVE_ADDTOCART_LOADING,
	REMOVE_ADDTOCART_SUCCESS,
} from '../../Action/ActionType/removeAddToCartActionType';

interface DefaultState {
	loading: boolean;
	message?: RemoveAddToCart;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

const RemoveAddToCartReducer = (
	state: DefaultState = initialState,
	action: RemoveAddToCartTypeDispatch
): DefaultState => {
	switch (action.type) {
		case REMOVE_ADDTOCART_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case REMOVE_ADDTOCART_LOADING:
			return {
				loading: true,
				error: null,
			};

		case REMOVE_ADDTOCART_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default RemoveAddToCartReducer;
