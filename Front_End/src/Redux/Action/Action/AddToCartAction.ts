import axios from 'axios';
import { Dispatch } from 'redux';
import {
	AddToCartDispatchType,
	ADDTOCART_FAIL,
	ADDTOCART_LOADING,
	ADDTOCART_SUCCESS,
} from '../ActionType/AddToCartActionType';

interface SingleProducts {
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
	(item: SingleProducts) =>
	async (dispatch: Dispatch<AddToCartDispatchType>) => {
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
