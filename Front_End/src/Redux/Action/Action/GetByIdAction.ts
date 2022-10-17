import axios from 'axios';
import { Dispatch } from 'redux';
import {
	StorePerDispatchType,
	STORE_PER_FAIL,
	STORE_PER_LOADING,
	STORE_PER_SUCCESS,
} from '../ActionType/GetByIdActionType';

export const GetStoreById =
	(id: string | undefined) =>
	async (dispatch: Dispatch<StorePerDispatchType>) => {
		try {
			dispatch({ type: STORE_PER_LOADING });

			const res = await axios.get(`http://localhost:5000/api/v1/store/${id}`);
			dispatch({
				type: STORE_PER_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: STORE_PER_FAIL,
			});
		}
	};
