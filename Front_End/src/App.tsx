import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/404';
import AboutUs from './Component/AboutUs';
import BuyNow from './Component/BuyNow';
import ContactUs from './Component/ContactUs';
import Dashboard from './Component/Dashboard/Dashboard';
import Fooder from './Component/Fooder/Fooder';
import Home from './Component/Home/Home';
import Location from './Component/Home/Location';
import Login from './Component/Login';
import NavBar from './Component/NavBar/NavBar';
import Register from './Component/Register';
import Store from './Component/Store';
import StoreDetils from './Component/StoreDetils';
import RequireAuth from './hooks/RequierAuth';
import { PersistenceAction } from './Redux/Action/Action/PersistenceAction';
import { RootStore } from './Redux/Store';
import './scss/App/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Component/AddToCart/Cart';
import ThankYou from './Component/ThankYou';
import AllOrder from './Component/Dashboard/AllOrder';
import UpdateProfile from './Component/Dashboard/UpdateProfile';
import ChangePassword from './Component/Dashboard/ChangePassword';

function App() {
	const dispatch = useDispatch();
	const persistence = useSelector((state: RootStore) => state.persistence);
	useEffect(() => {
		dispatch(PersistenceAction());
	}, [dispatch]);

	if (persistence.message?.status === 'Success') {
		localStorage.setItem('user', JSON.stringify(persistence?.message?.user));
	}

	console.log(persistence);
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/all_foods" element={<Location />}></Route>
				<Route path="/stores/:location" element={<Store />}></Route>
				<Route path="/restaurants/:id" element={<StoreDetils />}></Route>
				<Route path="/thankyou" element={<ThankYou />}></Route>
				<Route
					path="/shopping/:totalPrice"
					element={
						<RequireAuth>
							<BuyNow />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/cart"
					element={
						<RequireAuth>
							<Cart />
						</RequireAuth>
					}
				></Route>
				<Route path="/about_us" element={<AboutUs />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/contact_us" element={<ContactUs />}></Route>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route index element={<AllOrder />}></Route>
					<Route
						path="/dashboard/change_password"
						element={<ChangePassword />}
					></Route>
					<Route
						path="/dashboard/update_profile"
						element={<UpdateProfile />}
					></Route>
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Fooder />
			<ToastContainer />
		</div>
	);
}

export default App;
