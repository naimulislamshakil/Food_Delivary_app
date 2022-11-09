import { combineReducers } from 'redux';
import AddToCartReducer from './Reducer/AddToCartReducer';
import GetSingleStore from './Reducer/GetByIdReducer';
import LoginReducer from './Reducer/LoginReducer';
import PersistenceReducer from './Reducer/PersistenceReducer';
import RegisterUser from './Reducer/RegisterReducer';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
	storeById: GetSingleStore,
	registerUser: RegisterUser,
	user: LoginReducer,
	persistence: PersistenceReducer,
	addToCart: AddToCartReducer,
});

export default RootReducer;
