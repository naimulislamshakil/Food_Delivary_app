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
}

const initialState: DefaultState = {
	loading: false,
};

const PersistenceReducer = (
	state: DefaultState = initialState,
	action: PersistenceDispatcType
): DefaultState => {
	switch (action.type) {
		case PERSISTENCE_LOADING:
			return {
				loading: true,
			};
		case PERSISTENCE_FAIL:
			return {
				loading: false,
			};
		case PERSISTENCE_SUCCESS:
			return {
				loading: false,
				message: action.payload,
			};
		default:
			return state;
	}
};

export default PersistenceReducer;
