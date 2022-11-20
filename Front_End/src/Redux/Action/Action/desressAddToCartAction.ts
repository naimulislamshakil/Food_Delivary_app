import axios from 'axios';
import { Dispatch } from 'redux';
import {
	DecressAddToCartTypeDispatch,
	DECRESS_ADDTOCART_FAIL,
	DECRESS_ADDTOCART_LOADING,
	DECRESS_ADDTOCART_SUCCESS,
} from '../ActionType/decressAddToCartActionType';

export const DecressAddToCartAction =
	(id: string, price: number) =>
	async (dispatch: Dispatch<DecressAddToCartTypeDispatch>) => {
		try {
			dispatch({
				type: DECRESS_ADDTOCART_LOADING,
			});

			const res = await axios.get(
				`http://localhost:5000/api/v1//addToCart/decress/${id}?price=${price}`
			);

			dispatch({
				type: DECRESS_ADDTOCART_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: DECRESS_ADDTOCART_FAIL,
				payload: error.message,
			});
		}
	};
