import axios from 'axios';
import { Dispatch } from 'redux';
import {
	AddToCartTypeDispatch,
	ADDTOCART_FAIL,
	ADDTOCART_LOADING,
	ADDTOCART_SUCCESS,
} from '../ActionType/addToCartActionType';

interface Item {
	email: string;
	store: {
		id: string;
	};
	id: string;
	name: string;
	quantity: number;
	unit: string;
	description: string;
	price: number;
	img: string;
	category: string;
	status: string;
}

export const AddToCartAction =
	(item: Item) => async (dispatch: Dispatch<AddToCartTypeDispatch>) => {
		try {
			dispatch({
				type: ADDTOCART_LOADING,
			});

			const res = await axios.post(
				'http://localhost:5000/api/v1/addToCart',
				item
			);

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
