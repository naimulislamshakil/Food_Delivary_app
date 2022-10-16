import {
	StoreByLocation,
	StoreDispatchType,
	STORE_FAIL,
	STORE_LOADING,
	STORE_SUCCESS,
} from '../../Action/ActionType/GetByLocation';

interface DefaultState {
	loading: boolean;
	Product?: StoreByLocation;
}

const initialState: DefaultState = {
	loading: false,
};

const StoreByLocations = (
	state: DefaultState = initialState,
	action: StoreDispatchType
): DefaultState => {
	switch (action.type) {
		case STORE_LOADING:
			return {
				loading: true,
			};

		case STORE_FAIL:
			return {
				loading: false,
			};
		case STORE_SUCCESS:
			return {
				loading: false,
				Product: action.payload,
			};
		default:
			return state;
	}
};

export default StoreByLocations;
