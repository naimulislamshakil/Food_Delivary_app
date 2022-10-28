import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/404';
import AboutUs from './Component/AboutUs';
import BuyNow from './Component/BuyNow';
import ContactUs from './Component/ContactUs';
import Fooder from './Component/Fooder/Fooder';
import Home from './Component/Home/Home';
import Location from './Component/Home/Location';
import Login from './Component/Login';
import NavBar from './Component/NavBar/NavBar';
import Register from './Component/Register';
import Store from './Component/Store';
import StoreDetils from './Component/StoreDetils';
import RequireAuth from './hooks/RequierAuth';
import './scss/App/App.css';

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/all_foods" element={<Location />}></Route>
				<Route path="/stores/:location" element={<Store />}></Route>
				<Route path="/restaurants/:id" element={<StoreDetils />}></Route>
				<Route
					path="/shopping/:id"
					element={
						<RequireAuth>
							<BuyNow />
						</RequireAuth>
					}
				></Route>
				<Route path="/about_us" element={<AboutUs />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/contact_us" element={<ContactUs />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Fooder />
		</div>
	);
}

export default App;
