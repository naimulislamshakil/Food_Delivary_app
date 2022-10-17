import { combineReducers } from 'redux';
import { GetStoreById } from '../Action/Action/GetByIdAction';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
	storeById: GetStoreById,
});

export default RootReducer;
