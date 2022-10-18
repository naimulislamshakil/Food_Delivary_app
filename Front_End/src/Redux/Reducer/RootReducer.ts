import { combineReducers } from 'redux';
import GetSingleStore from './Reducer/GetByIdReducer';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
	storeById: GetSingleStore,
});

export default RootReducer;
