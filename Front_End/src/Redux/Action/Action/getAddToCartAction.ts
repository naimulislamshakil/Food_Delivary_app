import axios from 'axios';
import { Dispatch } from 'redux';
import {
	GetAddToCartDispatchType,
	GET_ADDTOCART_FAIL,
	GET_ADDTOCART_LOADING,
	GET_ADDTOCART_SUCCESS,
} from '../ActionType/getAddToCartActionType';

export const GetAddToCartAction =
	(email: string) => async (dispatch: Dispatch<GetAddToCartDispatchType>) => {
		try {
			dispatch({
				type: GET_ADDTOCART_LOADING,
			});

			const res = await axios.get(
				`http://localhost:5000/api/v1/addToCart/${email}`
			);

			dispatch({
				type: GET_ADDTOCART_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: GET_ADDTOCART_FAIL,
				payload: error.message,
			});
		}
	};
