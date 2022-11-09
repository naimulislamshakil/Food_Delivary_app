import axios from 'axios';
import { Dispatch } from 'redux';
import {
	AddToCartDispatchType,
	ADDTOCART_FAIL,
	ADDTOCART_LOADING,
	ADDTOCART_SUCCESS,
} from '../ActionType/AddToCartActionType';
import { SingleProduct } from '../ActionType/GetByIdActionType';

export const AddToCartAction =
	(item: SingleProduct) =>
	async (dispatch: Dispatch<AddToCartDispatchType>) => {
		try {
			dispatch({
				type: ADDTOCART_LOADING,
			});

			const res = await axios.post('');

			dispatch({
				type: ADDTOCART_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: ADDTOCART_FAIL,
				payload: error.message,
			});
		}
	};
