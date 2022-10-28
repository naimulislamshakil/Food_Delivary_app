import { combineReducers } from 'redux';
import GetSingleStore from './Reducer/GetByIdReducer';
import LoginReducer from './Reducer/LoginReducer';
import RegisterUser from './Reducer/RegisterReducer';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
	storeById: GetSingleStore,
	registerUser: RegisterUser,
	user: LoginReducer,
});

export default RootReducer;
