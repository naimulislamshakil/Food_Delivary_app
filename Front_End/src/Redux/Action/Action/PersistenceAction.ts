import axios from 'axios';
import { Dispatch } from 'redux';
import {
	PersistenceDispatcType,
	PERSISTENCE_FAIL,
	PERSISTENCE_LOADING,
	PERSISTENCE_SUCCESS,
} from '../ActionType/PersistenceActionType';

export const PersistenceAction =
	() => async (dispatch: Dispatch<PersistenceDispatcType>) => {
		try {
			dispatch({
				type: PERSISTENCE_LOADING,
			});

			const res = await axios.get(
				'https://food-delevary.onrender.com/api/v1/user/persistence',
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')!
						)}`,
					},
				}
			);

			dispatch({
				type: PERSISTENCE_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: PERSISTENCE_FAIL,
				payload: error.message,
			});
		}
	};
