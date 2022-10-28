import {
	LoginDispatchType,
	LogingUser,
	LOGIN_FAIL,
	LOGIN_LOADING,
	LOGIN_SUSSESS,
} from '../../Action/ActionType/LoginActionType';

interface DefaultState {
	loading: boolean;
	user?: LogingUser;
}

const initialState: DefaultState = {
	loading: false,
};

const LoginReducer = (
	state: DefaultState = initialState,
	action: LoginDispatchType
): DefaultState => {
	switch (action.type) {
		case LOGIN_LOADING:
			return {
				loading: true,
			};
		case LOGIN_FAIL:
			return {
				loading: false,
			};
		case LOGIN_SUSSESS:
			return {
				loading: false,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default LoginReducer;
