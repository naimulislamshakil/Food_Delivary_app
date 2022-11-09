import {
	AddToCart,
	AddToCartDispatchType,
	ADDTOCART_FAIL,
	ADDTOCART_LOADING,
	ADDTOCART_SUCCESS,
} from '../../Action/ActionType/AddToCartActionType';

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
	action: AddToCartDispatchType
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
				message: action.payload,
				error: null,
			};

		default:
			return state;
	}
};

export default AddToCartReducer;
