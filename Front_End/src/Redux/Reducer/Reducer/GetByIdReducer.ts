import {
	PerStoreDispatchType,
	PER_STORE_FAIL,
	PER_STORE_LOADING,
	PER_STORE_SUCCESS,
	SingleStore,
} from '../../Action/ActionType/GetByIdActionType';

interface DefaultState {
	loading: boolean;
	store?: SingleStore;
}

const initialState: DefaultState = {
	loading: false,
};

const GetSingleStore = (
	state: DefaultState = initialState,
	action: PerStoreDispatchType
): DefaultState => {
	switch (action.type) {
		case PER_STORE_LOADING:
			return {
				loading: true,
			};
		case PER_STORE_FAIL:
			return {
				loading: false,
			};
		case PER_STORE_SUCCESS:
			return {
				loading: false,
				store: action.payload,
			};

		default:
			return state;
	}
};

export default GetSingleStore;
