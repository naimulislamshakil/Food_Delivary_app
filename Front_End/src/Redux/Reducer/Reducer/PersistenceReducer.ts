import {
	Persistence,
	PersistenceDispatcType,
	PERSISTENCE_FAIL,
	PERSISTENCE_LOADING,
	PERSISTENCE_SUCCESS,
} from '../../Action/ActionType/PersistenceActionType';

interface DefaultState {
	loading: boolean;
	message?: Persistence;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

const PersistenceReducer = (
	state: DefaultState = initialState,
	action: PersistenceDispatcType
): DefaultState => {
	switch (action.type) {
		case PERSISTENCE_LOADING:
			return {
				loading: true,
				error: null,
			};
		case PERSISTENCE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PERSISTENCE_SUCCESS:
			return {
				loading: false,
				message: action.payload,
				error: null,
			};
		default:
			return state;
	}
};

export default PersistenceReducer;
