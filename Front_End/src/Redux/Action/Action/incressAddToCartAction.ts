import axios from 'axios';
import { Dispatch } from 'redux';
import {
	IncressAddToCartTypeDispatch,
	INCRESS_ADDTOCART_FAIL,
	INCRESS_ADDTOCART_LOADING,
	INCRESS_ADDTOCART_SUCCESS,
} from '../ActionType/incressAddToCartActionType';

export const IncressAddToCartAction =
	(id: string) => async (dispatch: Dispatch<IncressAddToCartTypeDispatch>) => {
		try {
			dispatch({
				type: INCRESS_ADDTOCART_LOADING,
			});

			const res = await axios.get(
				`http://localhost:5000/api/v1//addToCart/incress/${id}`
			);

			dispatch({
				type: INCRESS_ADDTOCART_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: INCRESS_ADDTOCART_FAIL,
				payload: error.message,
			});
		}
	};