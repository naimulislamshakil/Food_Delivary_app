import axios from 'axios';
import { Dispatch } from 'redux';
import {
	PerStoreDispatchType,
	PER_STORE_FAIL,
	PER_STORE_LOADING,
	PER_STORE_SUCCESS,
} from '../ActionType/GetByIdActionType';

export const GetSingleStoreAction =
	(id: string | undefined) =>
	async (dispatch: Dispatch<PerStoreDispatchType>) => {
		try {
			dispatch({
				type: PER_STORE_LOADING,
			});

			const res = await axios.get(
				`https://food-delevary.onrender.com/api/v1/store/${id}`
			);

			dispatch({
				type: PER_STORE_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PER_STORE_FAIL,
			});
		}
	};
