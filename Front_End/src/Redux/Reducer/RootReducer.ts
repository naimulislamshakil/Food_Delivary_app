import { combineReducers } from 'redux';
import AddToCartReducer from './Reducer/addToCartReducer';
import GetAddToCartReducer from './Reducer/getAddToCartReducer';
import GetSingleStore from './Reducer/GetByIdReducer';
import IncressAddToCartReducer from './Reducer/incressAddToCartReducer';
import LoginReducer from './Reducer/LoginReducer';
import PersistenceReducer from './Reducer/PersistenceReducer';
import RegisterUser from './Reducer/RegisterReducer';
import RemoveAddToCartReducer from './Reducer/removeAddToCartReducer';
import StoreByLocations from './Reducer/StoreByLocationReducer';

const RootReducer = combineReducers({
	storeByLocatins: StoreByLocations,
	storeById: GetSingleStore,
	registerUser: RegisterUser,
	user: LoginReducer,
	persistence: PersistenceReducer,
	addToCart: AddToCartReducer,
	getAddToCarts: GetAddToCartReducer,
	removeAddToCart: RemoveAddToCartReducer,
	incress: IncressAddToCartReducer,
});

export default RootReducer;
