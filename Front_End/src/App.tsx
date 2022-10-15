import { Route, Routes } from 'react-router-dom';
import Fooder from './Component/Fooder/Fooder';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import './scss/App/App.css';

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
			<Fooder />
		</div>
	);
}

export default App;
