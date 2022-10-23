import {
	RegisterDispatchType,
	REGISTER_FAIL,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from '../../Action/ActionType/RegisterActionType';

interface DefaultState {
	loading: boolean;
	message?: string;
}

const initialState: DefaultState = {
	loading: false,
};

const RegisterUser = (
	state: DefaultState = initialState,
	action: RegisterDispatchType
): DefaultState => {
	switch (action.type) {
		case REGISTER_LOADING:
			return {
				loading: true,
			};
		case REGISTER_FAIL:
			return {
				loading: false,
			};
		case REGISTER_SUCCESS:
			return {
				loading: false,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default RegisterUser;
