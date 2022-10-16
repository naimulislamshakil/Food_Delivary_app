import axios from 'axios';
import { Dispatch } from 'react';
import {
	StoreDispatchType,
	STORE_FAIL,
	STORE_LOADING,
	STORE_SUCCESS,
} from '../ActionType/GetByLocation';

export const GetStoreByLocation =
	(location: string | undefined) =>
	async (dispatch: Dispatch<StoreDispatchType>) => {
		try {
			dispatch({
				type: STORE_LOADING,
			});

			const res = await axios.get(
				`http://localhost:5000/api/v1/storebylocation?location=${location}`
			);

			dispatch({
				type: STORE_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: STORE_FAIL,
			});
		}
	};
