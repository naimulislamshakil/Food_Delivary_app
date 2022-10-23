import { combineReducers } from 'redux';
import GetSingleStore from './Reducer/GetByIdReducer';
import RegisterUser from './Reducer/RegisterReducer';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
	storeById: GetSingleStore,
	registerUser: RegisterUser,
});

export default RootReducer;
