import axios from 'axios';
import { Dispatch } from 'redux';
import {
	LoginDispatchType,
	LOGIN_FAIL,
	LOGIN_LOADING,
	LOGIN_SUSSESS,
} from '../ActionType/LoginActionType';

interface Props {
	email: string;
	password: string;
}

export const LoginAction =
	(user: Props) => async (dispatch: Dispatch<LoginDispatchType>) => {
		try {
			dispatch({
				type: LOGIN_LOADING,
			});

			const res = await axios.post(
				'https://food-delevary.onrender.com/api/v1/login',
				user
			);
			dispatch({
				type: LOGIN_SUSSESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
			});
		}
	};
