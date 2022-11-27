import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
	return (
		<div>
			<div className="sidebar">
				<Link to="/dashboard" className="active">
					All Order
				</Link>
				<a href="#news">News</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
			</div>

			{/* <!-- Page content --> */}
			<div className="content">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
