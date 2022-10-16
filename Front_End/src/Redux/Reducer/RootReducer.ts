import { combineReducers } from 'redux';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
});

export default RootReducer;
