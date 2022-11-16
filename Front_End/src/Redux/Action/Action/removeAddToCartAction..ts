import axios from 'axios';
import { Dispatch } from 'redux';
import {
	RemoveAddToCartTypeDispatch,
	REMOVE_ADDTOCART_FAIL,
	REMOVE_ADDTOCART_LOADING,
	REMOVE_ADDTOCART_SUCCESS,
} from '../ActionType/removeAddToCartActionType';

export const RemoveAddToCartAction =
	(id: string) => async (dispatch: Dispatch<RemoveAddToCartTypeDispatch>) => {
		try {
			dispatch({
				type: REMOVE_ADDTOCART_LOADING,
			});

			const res = await axios.delete(
				`http://localhost:5000/api/v1/removeAddToCart/${id}`
			);

			dispatch({
				type: REMOVE_ADDTOCART_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: REMOVE_ADDTOCART_FAIL,
				payload: error.message,
			});
		}
	};
