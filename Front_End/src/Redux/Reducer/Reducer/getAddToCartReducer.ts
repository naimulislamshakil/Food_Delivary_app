import {
	GetAddToCart,
	GetAddToCartDispatchType,
	GET_ADDTOCART_FAIL,
	GET_ADDTOCART_LOADING,
	GET_ADDTOCART_SUCCESS,
} from '../../Action/ActionType/getAddToCartActionType';

interface DefaultState {
	loading: boolean;
	message?: GetAddToCart;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

const GetAddToCartReducer = (
	state: DefaultState = initialState,
	action: GetAddToCartDispatchType
): DefaultState => {
	switch (action.type) {
		case GET_ADDTOCART_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case GET_ADDTOCART_LOADING:
			return {
				loading: true,
				error: null,
			};

		case GET_ADDTOCART_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default GetAddToCartReducer;
