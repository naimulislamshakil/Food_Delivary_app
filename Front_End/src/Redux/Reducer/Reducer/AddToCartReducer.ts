import {
	AddToCart,
	AddToCartTypeDispatch,
	ADDTOCART_FAIL,
	ADDTOCART_LOADING,
	ADDTOCART_SUCCESS,
} from '../../Action/ActionType/addToCartActionType';

interface DefaultState {
	loading: boolean;
	message?: AddToCart;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

const AddToCartReducer = (
	state: DefaultState = initialState,
	action: AddToCartTypeDispatch
): DefaultState => {
	switch (action.type) {
		case ADDTOCART_LOADING:
			return {
				loading: true,
				error: null,
			};
		case ADDTOCART_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ADDTOCART_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default AddToCartReducer;
