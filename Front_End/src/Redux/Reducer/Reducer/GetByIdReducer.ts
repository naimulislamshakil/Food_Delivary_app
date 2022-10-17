import {
	StorePerDispatchType,
	STORE_PER_FAIL,
	STORE_PER_LOADING,
	STORE_PER_SUCCESS,
} from '../../Action/ActionType/GetByIdActionType';
import { PerStore } from '../../Action/ActionType/GetByLocation';

interface DefaultState {
	loading: boolean;
	store?: PerStore | undefined;
}

const initialState: DefaultState = {
	loading: false,
};

const StoreById = (
	state: DefaultState = initialState,
	action: StorePerDispatchType
): DefaultState => {
	switch (action.type) {
		case STORE_PER_LOADING:
			return {
				loading: true,
			};

		case STORE_PER_FAIL:
			return {
				loading: false,
			};
		case STORE_PER_SUCCESS:
			return {
				loading: false,
				store: action.payload,
			};
		default:
			return state;
	}
};

export default StoreById;
