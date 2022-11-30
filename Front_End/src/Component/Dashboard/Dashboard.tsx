import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
	return (
		<div>
			<div className="sidebar">
				<Link to="/dashboard" className="active fw-bold">
					All Order
				</Link>
				<Link className="fw-bold" to="/dashboard/update_profile">
					Update Profile
				</Link>
				<Link to="/dashboard/change_password" className="fw-bold">
					Change Password
				</Link>
				<a href="#about" className="fw-bold">
					About
				</a>
			</div>

			{/* <!-- Page content --> */}
			<div className="content">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
