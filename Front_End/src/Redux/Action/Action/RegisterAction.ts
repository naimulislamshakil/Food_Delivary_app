import axios from 'axios';
import { Dispatch } from 'redux';
import {
	RegisterDispatchType,
	RegisterUesr,
	REGISTER_LOADING,
} from '../ActionType/RegisterActionType';

export const RegisterAction =
	(user: RegisterUesr) => async (dispatch: Dispatch<RegisterDispatchType>) => {
		try {
			dispatch({
				type: REGISTER_LOADING,
			});

			const res = await axios.post();
		} catch (error) {}
	};
